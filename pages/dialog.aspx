<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>
<%@ Page Language="C#" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<!-- Required to be used in an App Part -->
<WebPartPages:AllowFraming runat="server" />

<html>

<head>
    <title></title>
    <meta name="WebPartPageExpansion" content="full" />

    <!-- SP References -->
    <script src="/_layouts/1033/init.js"></script>
    <script src="/_layouts/15/MicrosoftAjax.js"></script>
    <script src="/_layouts/15/sp.core.js"></script>
    <script src="/_layouts/15/sp.runtime.js"></script>
    <script src="/_layouts/15/sp.js"></script>
    <script src="/_layouts/15/sp.init.js"></script>
</head>

<body>
    <form runat="server">
        <!-- Required to make posts to SP -->
        <SharePoint:FormDigest runat="server" />

        <!-- Main -->
        <div id="vue-js-demo"></div>

        <!-- Initialize App -->
        <script type="text/javascript">
            // Wait for the SP references to be loaded
            window.addEventListener("load", function () {
                // Load the script
                var s = document.createElement("script");
                s.src = "./vue-demo-app.js";
                document.head.appendChild(s);

                // Wait for the script to be loaded, and initialize the app
                SP.SOD.executeOrDelayUntilScriptLoaded(function () { VueJSDemo.dialog(); }, "vue-demo-app");
            });
        </script>
    </form>
</body>

</html>