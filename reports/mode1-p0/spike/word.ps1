param([string]$Mode, [string]$In, [string]$Out)
# Word COM helper cho spike P0. Mọi thao tác trên bản sao trong scratchpad.
$ErrorActionPreference = 'Stop'
$w = New-Object -ComObject Word.Application
$w.Visible = $false
$w.DisplayAlerts = 0
try {
  switch ($Mode) {
    'roundtrip' {
      $d = $w.Documents.Open($In, $false, $false, $false)
      $d.SaveAs2($Out, 16); $d.Close($false)
      Write-Output "ok"
    }
    'edit' {
      # Mô phỏng người dùng sửa ngoài FlintFlow: sửa chữ trong 1 đoạn, chèn đoạn mới, xoá 1 đoạn, sửa 1 ô bảng
      $d = $w.Documents.Open($In, $false, $false, $false)
      $n = $d.Paragraphs.Count
      $p = $d.Paragraphs.Item([int]($n/3)).Range
      $p.InsertAfter(" (edited outside)")
      $d.Paragraphs.Item([int]($n/2)).Range.InsertParagraphAfter()
      $d.Paragraphs.Item([int]($n/2) + 1).Range.InsertBefore("New paragraph typed by user")
      $d.Paragraphs.Item([int]($n*3/4)).Range.Delete() | Out-Null
      if ($d.Tables.Count -gt 0) { $d.Tables.Item(1).Cell(2,2).Range.InsertAfter(" X") }
      $d.SaveAs2($Out, 16); $d.Close($false)
      Write-Output "ok"
    }
    'inspect' {
      $d = $w.Documents.Open($In, $false, $true, $false)
      $revs = @(); foreach ($r in $d.Revisions) { $revs += [pscustomobject]@{ author = $r.Author; type = $r.Type; text = $r.Range.Text } }
      $cms = @(); foreach ($c in $d.Comments) { $cms += [pscustomobject]@{ author = $c.Author; text = $c.Range.Text; scope = $c.Scope.Text } }
      $hdrs = @(); $i = 0
      foreach ($s in $d.Sections) { $i++; foreach ($k in 1,2,3) { $h = $s.Headers.Item($k); if ($h.Exists) { $hdrs += [pscustomobject]@{ section = $i; kind = $k; linked = $h.LinkToPrevious; text = $h.Range.Text.Trim() } } } }
      $props = @(); foreach ($p in $d.CustomDocumentProperties) { $props += "$($p.Name)=$($p.Value)" }
      $res = [pscustomobject]@{ revisions = $revs; comments = $cms; headers = $hdrs; custom = $props; paragraphs = $d.Paragraphs.Count }
      if ($Out) { $d.ExportAsFixedFormat($Out, 17) }
      $d.Close($false)
      $res | ConvertTo-Json -Depth 5
    }
    'acceptall' {
      $d = $w.Documents.Open($In, $false, $false, $false)
      $d.Revisions.AcceptAll(); $d.DeleteAllComments()
      $t = $d.Content.Text
      $d.SaveAs2($Out, 16); $d.Close($false)
      Write-Output $t
    }
    'rejectall' {
      $d = $w.Documents.Open($In, $false, $false, $false)
      $d.Revisions.RejectAll()
      $t = $d.Content.Text
      $d.Close($false)
      Write-Output $t
    }
    'text' {
      $d = $w.Documents.Open($In, $false, $true, $false)
      $t = $d.Content.Text; $d.Close($false); Write-Output $t
    }
    'mkforeign' {
      # File có Track Changes + comment của tác giả lạ
      $w.UserName = 'Nguyen Van A'
      $d = $w.Documents.Open($In, $false, $false, $false)
      $d.TrackRevisions = $true
      $d.Paragraphs.Item(5).Range.InsertAfter(" foreign edit")
      $d.Comments.Add($d.Paragraphs.Item(6).Range, "foreign comment") | Out-Null
      $d.TrackRevisions = $false
      $d.SaveAs2($Out, 16); $d.Close($false)
      Write-Output "ok"
    }
    'mkencrypted' {
      $d = $w.Documents.Open($In, $false, $false, $false)
      $d.SaveAs2($Out, 16, $false, 'secret'); $d.Close($false)
      Write-Output "ok"
    }
    'mkdoc' {
      $d = $w.Documents.Open($In, $false, $false, $false)
      $d.SaveAs2($Out, 0); $d.Close($false)
      Write-Output "ok"
    }
    'mksections' {
      # File 3 section, header khác nhau, section 2 có first-page header riêng, section 3 dùng lại header section 2
      $d = $w.Documents.Add()
      $d.Content.Text = "Cover page"
      $r = $d.Content; $r.InsertParagraphAfter(); $r = $d.Paragraphs.Last.Range
      $r.InsertBreak(2)
      $d.Paragraphs.Last.Range.InsertAfter("Section two body")
      $d.Content.InsertParagraphAfter(); $d.Paragraphs.Last.Range.InsertBreak(2)
      $d.Paragraphs.Last.Range.InsertAfter("Section three body")
      $s1 = $d.Sections.Item(1); $s2 = $d.Sections.Item(2); $s3 = $d.Sections.Item(3)
      $s1.Headers.Item(1).Range.Text = "Cover header"
      $s2.Headers.Item(1).LinkToPrevious = $false
      $s2.Headers.Item(1).Range.Text = "Body header"
      $s2.PageSetup.DifferentFirstPageHeaderFooter = -1
      $s2.Headers.Item(2).LinkToPrevious = $false
      $s2.Headers.Item(2).Range.Text = "Body first page header"
      $s3.Headers.Item(1).LinkToPrevious = $true
      $d.SaveAs2($Out, 16); $d.Close($false)
      Write-Output "ok"
    }
  }
} finally {
  $w.Quit()
  [System.Runtime.InteropServices.Marshal]::ReleaseComObject($w) | Out-Null
}
