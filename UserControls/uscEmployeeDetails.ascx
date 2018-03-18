<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="uscEmployeeDetails.ascx.cs" Inherits="HCM10.Web.UserControls.uscEmployeeDetails" %>
<%@ Register Assembly="DevExpress.Web.v17.2, Version=17.2.5.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.Web" TagPrefix="dx" %>

<%@ Register Assembly="DevExpress.XtraCharts.v17.2.Web, Version=17.2.5.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.XtraCharts.Web" TagPrefix="dx" %>
<%@ Register Assembly="DevExpress.XtraCharts.v17.2, Version=17.2.5.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.XtraCharts" TagPrefix="dx" %>

<dx:ASPxCallbackPanel ID="ASPxCallbackPanel1" runat="server"
    ClientInstanceName="CallbackPanel1"
    OnCallback="ASPxCallbackPanel1_Callback" ClientSideEvents-EndCallback="function(s,e){
         CallbackPanel2.PerformCallback();
         }">
<ClientSideEvents EndCallback="function(s,e){
         CallbackPanel2.PerformCallback();
         }"></ClientSideEvents>
    <PanelCollection>
        <dx:PanelContent runat="server">

            <table>
                <tr>
                    <td>
                        <dx:ASPxLabel ID="lblPeriod" runat="server" Text="Period">
                        </dx:ASPxLabel>
                    </td>
                    <td>&nbsp;
                    </td>
                    <td>

                        <dx:ASPxTextBox ID="txtMonth" CssClass="roundedBorders" ClientInstanceName="txtMonth" runat="server" Width="35px" Height="42px" NullText="mm"></dx:ASPxTextBox>

                    </td>
                    <td>&nbsp;
                    </td>
                    <td>

                        <dx:ASPxTextBox ID="txtYear" CssClass="roundedBorders" ClientInstanceName="txtYear" runat="server" NullText="yyyy" Width="45px" Height="42px">
                        </dx:ASPxTextBox>

                    </td>
                    <td>&nbsp;
                    </td>

                    <td>
                        <dx:ASPxButton ID="btnGet" ClientInstanceName="btnGetData" runat="server" AutoPostBack="false" Text="Get Data" Width="150px">
                            <ClientSideEvents Click="function(s,e){
                                SetCustomFilterParams();
         CallbackPanel1.PerformCallback(0+'|page');
         }" />
                            <Image Height="24px" Url="~/Images/data.png" Width="24px">
                            </Image>
                        </dx:ASPxButton>
                    </td>
                    <td>

                        <dx:ASPxButton ID="btnDrillUp" runat="server" AutoPostBack="False">
                            <ClientSideEvents Click="function(s,e){
                    SetCustomFilterParams();
         CallbackPanel1.PerformCallback(0+'|prev');
         }" />
                            <Image Height="24px" Url="~/Images/drillup.png" Width="24px">
                            </Image>
                        </dx:ASPxButton>
                    </td>
                    <td>
                        <dx:ASPxButton ID="btnExportToExcel" runat="server" OnClick="btnExportXlsx_Click">
                            <Image Height="24px" Url="~/Images/excel.png" Width="24px">
                            </Image>
                        </dx:ASPxButton>
                    </td>
                    <td>
                        <dx:ASPxButton ID="btnExportToPDF" runat="server" OnClick="btnExportPDF_Click">
                            <Image Height="24px" Url="~/Images/PDF.jpg" Width="24px">
                            </Image>
                        </dx:ASPxButton>
                    </td>
                </tr>
            </table>
            <br />
            <dx:ASPxGridView ID="ASPxGridView1" runat="server" OnDataBinding="ASPxGridView1_DataBinding" OnDataBound="ASPxGridView1_DataBound"
                EnableCallBacks="false" EnableViewState="false" ClientSideEvents-EndCallback="function(s,e){
         CallbackPanel2.PerformCallback();
         }">
                <ClientSideEvents Init="function(s,e){
         CallbackPanel2.PerformCallback();
         }" />

                <ClientSideEvents BeginCallback="function(s,e){ 

         SetCustomFilterParams();
         }" />
                <SettingsContextMenu Enabled="True">
                </SettingsContextMenu>

                <Settings ShowFilterRow="True" AutoFilterCondition="Contains" ShowHeaderFilterButton="True" ShowFooter="True" />
                <SettingsBehavior EnableCustomizationWindow="True" />
                <Columns>
                    <dx:GridViewCommandColumn ShowClearFilterButton="True" ShowInCustomizationForm="True" VisibleIndex="0">
                    </dx:GridViewCommandColumn>
                </Columns>
            </dx:ASPxGridView>
            <dx:ASPxGridViewExporter ID="gridExport1" runat="server" GridViewID="ASPxGridView1"></dx:ASPxGridViewExporter>


            <br />



        </dx:PanelContent>
    </PanelCollection>
</dx:ASPxCallbackPanel>
<dx:ASPxCallbackPanel ID="ASPxCallbackPanel2" runat="server" ClientInstanceName="CallbackPanel2"
    OnCallback="ASPxCallbackPanel2_Callback">
    <PanelCollection>
        <dx:PanelContent>
            <dx:WebChartControl ID="WebChartControl1" runat="server" CrosshairEnabled="True" Height="200px" Width="600px">
                <Legend Name="Default Legend"></Legend>
            </dx:WebChartControl>
        </dx:PanelContent>
    </PanelCollection>
</dx:ASPxCallbackPanel>

