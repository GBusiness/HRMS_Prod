

//function ASPxGridView1_Click(s, e) {
//    if (ASPxGridView1.IsCustomizationWindowVisible())
//        ASPxGridView1.HideCustomizationWindow();
//    else
//        ASPxGridView1.ShowCustomizationWindow();
//    UpdateButtonText();
//}
//function ASPxGridView1_CustomizationWindowCloseUp(s, e) {
//    UpdateButtonText();
//}
//function UpdateButtonText() {
//    var text = ASPxGridView1.IsCustomizationWindowVisible() ? "Hide" : "Show";
//    text += " Column Chooser";
//    btnColumnChooser.SetText(text);
//}

// #region Type-1-uscRptCustomFilter

// Get To & From Date value to set in the Date Session used on Usc Report

function usc1CustomfilterOnSelectionChanged(s, e) {
    Set1CustomFilterParams();
    CallbackPanel1.PerformCallback(e.visibleIndex + '|next');
}

function Set1CustomFilterParams() {
    var dtFromValue = dtFrom.GetValue();
    var dtToValue = dtTo.GetValue();

    ClientServerParams.Set("dtFromValue", formatDate(dtFromValue));
    ClientServerParams.Set("dtToValue", formatDate(dtToValue));
}

// #endregion

// #region Type-2-uscRptCustomFilter

// Get & Set Status value to Session used on Usc Report [HeadCount]

function usc2CustomfilterOnSelectionChanged(s, e) {
    Set2CustomFilterParams();
    CallbackPanel1.PerformCallback(e.visibleIndex + '|next');
}

function Set2CustomFilterParams() {
    var StatusTypeCode = "Active";
    ClientServerParams.Set("StatusTypeCode", StatusTypeCode);
}

// #endregion

// #region Type-3-uscRptCustomFilter

// Get Month and Year value to set in the Session used on Usc Report

function usc3CustomfilterOnSelectionChanged(s, e) {
    Set3CustomFilterParams();
    CallbackPanel1.PerformCallback(e.visibleIndex + '|next');
}

function Set3CustomFilterParams() {
    var txtMonthValue = txtMonth.GetValue();
    var txtYearValue = txtYear.GetValue();
    ClientServerParams.Set("txtMonthValue", txtMonthValue);
    ClientServerParams.Set("txtYearValue", txtYearValue);
}


// #endregion