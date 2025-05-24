<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" indent="yes"/>
  <!-- TEMPLATE RAÍZ -->

  <xsl:template match="/realmadrid">
    <html>
      <head>
        <title>Plantilla del Real Madrid</title>
        <style>
          body { font-family: Arial; background: #f5f5f5; padding: 20px; }
          h1 { color:rgb(14, 82, 176); }
          .jugador { margin-bottom: 15px; background: white; padding: 10px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <h1>Jugadores del Real Madrid</h1>

        <!-- FOR-EACH con SORT -->
        <xsl:for-each select="plantilla/jugador">
          <xsl:sort select="@dorsal" data-type="number" order="ascending"/>

          <div class="jugador">
            <strong>Nombre:</strong> <xsl:value-of select="@nombre"/> <br/>
            <strong>Posición:</strong> <xsl:value-of select="@posicion"/> <br/>
            <strong>Dorsal:</strong> <xsl:value-of select="@dorsal"/> <br/>

            <!-- IF: mensaje si el jugador es portero -->
            <xsl:if test="@posicion = 'Portero'">
              <span style="color: green; font-weight: bold;">¡Es el guardameta titular!</span>
            </xsl:if>
          </div>
        </xsl:for-each>

      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
