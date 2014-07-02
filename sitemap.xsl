<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:html="http://www.w3.org/TR/REC-html40" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
		<style type="text/css">
html, body {
	width: 100%;
	height: 100%;
}
body {
	background-color: #FFF;
	font: 14px \5FAE\8F6F\96C5\9ED1, \534E\6587\9ED1\4F53, Helvetica, Arial, sans-serif;
	text-align: left;
	margin: 3em auto 2em;
}
a {
	text-decoration:none;
}
.posts a:link {
	color:#000;
}
a.hover {
	color:#00f;
}
a.active {
	color:#00f;
}
a:visited {
	color: #000;
}
.content {
	width:777px;
	height:auto;
	margin: 3em auto 2em;
}
.table {
	border-width:0px;
	text-align:left;
}
h1 {
	font-size:120%;
}
</style>
		</head>
		
		<body>
		<div class="content">
			<table  class="table">
				<tr>
					<td colspan="3"><h1>遗迹の网站地图</h1></td>
				</tr>
				<tr>
					<th width="500px">网址</th>
					<th width="77px">优先级</th>
					<th width="100px">创建日期</th>
				</tr>
				<xsl:for-each select="sitemap:urlset/sitemap:url">
					<tr>
						<xsl:variable name="itemURL"> <xsl:value-of select="sitemap:loc"/> </xsl:variable>
						<td><a href="{$itemURL}" target="_blank"> <xsl:value-of select="sitemap:loc"/> </a></td>
						<td><xsl:value-of select="concat(sitemap:priority*100,'%')"/></td>
						<td><xsl:value-of select="concat(
						concat(substring(sitemap:lastmod,0,5), '/' ),
						concat(substring(sitemap:lastmod,6,2), '/' ),
						concat(substring(sitemap:lastmod,9,2), ' ' ),
						substring(sitemap:lastmod,12,5)				
						)"/></td>
					</tr>
				</xsl:for-each>
			</table>
		</div>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>