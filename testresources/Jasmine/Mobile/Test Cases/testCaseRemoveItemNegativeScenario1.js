it("storeDSLocalAPI/testCaseRemoveItemNegativeScenario1", async function() {
	await voltmx.automation.playback.wait(1000);
	await voltmx.automation.playback.waitFor(["frmLocalStoreAPI","txtKey3"]);
	voltmx.automation.textbox.enterText(["frmLocalStoreAPI","txtKey3"],"key2");
	voltmx.automation.button.click(["frmLocalStoreAPI","CopyButton0gc3081eb4adb47"]);
});