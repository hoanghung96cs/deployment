function saveTextAsFile(id) {
    var textToSave = document.getElementById(id).value;
    if (textToSave.length != 0) {
        var textToSaveAsBlob = new Blob([textToSave], {
            type: "text/plain"
        });
        var fileNameToSaveAs = "configuration.xml";
        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            downloadLink.href = window.webkitURL.createObjectURL(textToSaveAsBlob);
        } else {
            downloadLink.href = window.URL.createObjectURL(textToSaveAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();
    } else {
        alert('configuration.xml is invalid !');
    }
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}
var expanded = false;

function showCheckboxes(id) {
    let checkboxes = document.getElementById(id);
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

(function(d) {
    const df = '    </Add>\n    <Display Level="Full" AcceptEULA="TRUE"/>\n    <Property Name="AUTOACTIVATE" Value="1"/>\n    <Property Name="FORCEAPPSHUTDOWN" Value="TRUE"/>\n    <Property Name="SharedComputerLicensing" Value="0"/>\n    <Property Name="PinIconsToTaskbar" Value="TRUE"/>\n    <Updates Enabled="TRUE" />\n    <Property Name="SCLCacheOverride" Value="0"/>\n    <RemoveMSI All="TRUE"/>\n';

    function id(id) {
        return d.getElementById(id);
    }

    function cl(cl) {
        return d.getElementsByClassName(cl);
    }

    function name(name) {
        return d.getElementsByName(name);
    }

    id("checkboxes-5").appendChild(cl("clone")[0].cloneNode(true));
    id("checkboxes-3").appendChild(cl("clone-2")[0].cloneNode(true));
    id("checkboxes-6").appendChild(cl("clone-2")[0].cloneNode(true));
    id("checkboxes-7").appendChild(cl("clone-2")[0].cloneNode(true));

    var x1 = id("checkAccess"),
        x2 = id("checkExcel"),
        x3 = id("checkGroove"),
        x4 = id("checkLync"),
        x5 = id("checkOneDrive"),
        x6 = id("checkOneNote"),
        x7 = id("checkOutlook"),
        x8 = id("checkPowerPoint"),
        x9 = id("checkPublisher"),
        x10 = id("checkWord"),
        x11 = id("project"),
        x12 = id("visio"),
        x13 = id("projectstd"),
        x14 = id("visiostd"),
        result = "",
        result_2 = "";
    var t = $("#BackToTop");
    $(window).scroll(function() {
        $(this).scrollTop() >= 200 ? t.show(10).animate("#BackToTop").addClass("active") : t.animate("#BackToTop").removeClass("active")
    });
    t.click(function(t) {
        t.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 800)
    })

    id("generator").addEventListener("click", function() {
        if (!x1.checked && !x2.checked && !x3.checked && !x4.checked && !x5.checked && !x6.checked && !x7.checked && !x8.checked && !x9.checked && !x10.checked) {
            alert('Please choose minimize 1 app to install');
        } else {
            id("config").value = "";
            var radios = name("edition"),
                radios1 = name("platform"),
                radios2 = name("channel"),
                key1 = id("key19Pro").value,
                key2 = id("key19Project").value,
                key3 = id("key19Visio").value,
                key4 = id("key19Std").value,
                key5 = id("key19Profesional").value,
                key6 = id("key19HB").value,
                key7 = id("key19HS").value,
                key8 = id("key19ProjectStd").value,
                key9 = id("key19VisioStd").value,
                key10 = id("key19Personal").value;
            var flag_1 = false;
            for (var i = 0; i < radios1.length; i++) {
                for (var j = 0; j < radios2.length; j++) {
                    for (var k = 0; k < radios.length; k++) {
                        if (radios1[i].checked && radios2[j].checked && radios[k].checked) {
                            if (radios[k].value == "ProPlus2019Volume" || radios[k].value == "Standard2019Volume") {
                                result += '<Configuration>\n    <Add OfficeClientEdition="' + radios1[i].value + '" Channel="PerpetualVL2019" AllowCdnFallback="TRUE" ForceUpgrade="TRUE">\n';
                            } else {
                                result += '<Configuration>\n    <Add OfficeClientEdition="' + radios1[i].value + '" Channel="' + radios2[j].value + '" AllowCdnFallback="TRUE" ForceUpgrade="TRUE">\n';
                            }
                            break;
                        }
                    }
                }
            }
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    if (id('key19Pro').value.length > 0 && (radios[i].value == "ProPlus2019Retail" || radios[i].value == "ProPlus2019Volume")) {
                        result += '        <Product ID="' + radios[i].value + '" PIDKEY="' + key1 + '">\n';
                    } else if (id('key19Std').value.length > 0 && (radios[i].value == "Standard2019Retail" || radios[i].value == "Standard2019Volume")) {
                        result += '        <Product ID="' + radios[i].value + '" PIDKEY="' + key4 + '">\n';
                    } else if (id('key19Profesional').value.length > 0 && radios[i].value == "Professional2019Retail") {
                        result += '        <Product ID="' + radios[i].value + '" PIDKEY="' + key5 + '">\n';
                    } else if (id('key19HB').value.length > 0 && radios[i].value == "HomeBusiness2019Retail") {
                        result += '        <Product ID="' + radios[i].value + '" PIDKEY="' + key6 + '">\n';
                    } else if (id('key19HS').value.length > 0 && radios[i].value == "HomeStudent2019Retail") {
                        result += '        <Product ID="' + radios[i].value + '" PIDKEY="' + key7 + '">\n';
                    } else if (id('key19Personal').value.length > 0 && radios[i].value == "Personal2019Retail") {
                        result += '        <Product ID="' + radios[i].value + '" PIDKEY="' + key10 + '">\n';
                    } else {
                        result += '        <Product ID="' + radios[i].value + '">\n';
                    }
                    break;
                }
            }
            var c1 = d.querySelectorAll("#checkboxes-1 input[type=checkbox]");
            for (var i = 0; i < c1.length; i++) {
                if (c1[i].checked) {
                    result += '            <Language ID="' + c1[i].value + '"/>\n';
                    flag_1 = true;
                }
            };
            if (!flag_1) {
                result += '            <Language ID="MatchOS"/>\n';
            };
            if (!x1.checked) result += '            <ExcludeApp ID="Access"/>\n';
            if (!x2.checked) result += '            <ExcludeApp ID="Excel"/>\n';
            if (!x3.checked) result += '            <ExcludeApp ID="Groove"/>\n';
            if (!x4.checked) result += '            <ExcludeApp ID="Lync"/>\n';
            if (!x5.checked) result += '            <ExcludeApp ID="OneDrive"/>\n';
            if (!x6.checked) result += '            <ExcludeApp ID="OneNote"/>\n';
            if (!x7.checked) result += '            <ExcludeApp ID="Outlook"/>\n';
            if (!x8.checked) result += '            <ExcludeApp ID="PowerPoint"/>\n';
            if (!x9.checked) result += '            <ExcludeApp ID="Publisher"/>\n';
            if (!x10.checked) result += '            <ExcludeApp ID="Word"/>\n';
            result += '        </Product>\n';

            function a(b, c, k, e, f) {
                let g = false;
                if (id(b).value.length > 0) {
                    result += '        <Product ID="' + c + '2019' + k + '" PIDKEY="' + e + '">\n';
                } else {
                    result += '        <Product ID="' + c + '2019' + k + '">\n';
                }
                var c2 = d.querySelectorAll('#' + f + ' input[type=checkbox]');
                for (var i = 0; i < c2.length; i++) {
                    if (c2[i].checked) {
                        result += '            <Language ID="' + c2[i].value + '"/>\n';
                        g = true;
                    }
                };
                if (!g) {
                    result += '            <Language ID="MatchOS"/>\n';
                };
                result += '        </Product>\n';
            }
            if (x11.checked) {
                for (var i = 0; i < radios.length; i++) {
                    if (radios[i].checked) {
                        if (radios[i].value == "ProPlus2019Volume" || radios[i].value == "Standard2019Volume") {
                            a("key19Project", "ProjectPro", "Volume", key2, "checkboxes-2");
                        } else {
                            a("key19Project", "ProjectPro", "Retail", key2, "checkboxes-2");
                        }
                    }
                }
            }

            if (x12.checked) {
                for (var i = 0; i < radios.length; i++) {
                    if (radios[i].checked) {
                        if (radios[i].value == "ProPlus2019Volume" || radios[i].value == "Standard2019Volume") {
                            a("key19Visio", "VisioPro", "Volume", key3, "checkboxes-3");
                        } else {
                            a("key19Visio", "VisioPro", "Retail", key3, "checkboxes-3");
                        }
                    }
                }
            }

            if (x13.checked) {
                for (var i = 0; i < radios.length; i++) {
                    if (radios[i].checked) {
                        if (radios[i].value == "ProPlus2019Volume" || radios[i].value == "Standard2019Volume") {
                            a("key19ProjectStd", "ProjectStd", "Volume", key8, "checkboxes-6");
                        } else {
                            a("key19ProjectStd", "ProjectStd", "Retail", key8, "checkboxes-6");
                        }
                    }
                }
            }

            if (x14.checked) {
                for (var i = 0; i < radios.length; i++) {
                    if (radios[i].checked) {
                        if (radios[i].value == "ProPlus2019Volume" || radios[i].value == "Standard2019Volume") {
                            a("key19VisioStd", "VisioStd", "Volume", key9, "checkboxes-7");
                        } else {
                            a("key19VisioStd", "VisioStd", "Retail", key9, "checkboxes-7");
                        }
                    }
                }
            }
            result += df;
            result += '</Configuration>';
            id("config").value = result;
            result = '';
        }
    });
    id("generator-2").addEventListener("click", function() {
        var check = false;
        var c3 = d.querySelectorAll('#checkboxes-4 input[type=checkbox]');
        for (var i = 0; i < c3.length; i++) {
            if (c3[i].checked) {
                check = true;
            }
        };
        if (!check) {
            alert('Please choose minimize 1 app to install');
        } else {
            id("config-2").value = "";
            var rd1 = name("platform-2"),
                rd2 = name("channel-2"),
                rd3 = name("lic");
            for (var k = 0; k < rd3.length; k++) {
                for (var i = 0; i < rd1.length; i++) {
                    for (var j = 0; j < rd2.length; j++) {
                        if (rd3[k].checked && rd1[i].checked && rd2[j].checked) {
                            if (rd3[k].value == "retail") {
                                result_2 += '<Configuration>\n    <Add OfficeClientEdition="' + rd1[i].value + '" Channel="' + rd2[j].value + '" AllowCdnFallback="TRUE" ForceUpgrade="TRUE">\n';
                            } else {
                                result_2 += '<Configuration>\n    <Add OfficeClientEdition="' + rd1[i].value + '" Channel="PerpetualVL2019" AllowCdnFallback="TRUE" ForceUpgrade="TRUE">\n';
                            }
                            break;
                        }
                    }
                }
            }

            function n(a, b) {
                if (id(a).checked) {
                    for (var j = 0; j < rd3.length; j++) {
                        if (rd3[j].checked) {
                            if (rd3[j].value == "retail") {
                                if (id(b).value.length > 0) {
                                    result_2 += '        <Product ID="' + id(a).value + 'Retail" PIDKEY="' + id(b).value + '">\n';
                                } else {
                                    result_2 += '        <Product ID="' + id(a).value + 'Retail">\n';
                                }
                            } else {
                                if (id(b).value.length > 0) {
                                    result_2 += '        <Product ID="' + id(a).value + 'Volume" PIDKEY="' + id(b).value + '">\n';
                                } else {
                                    result_2 += '        <Product ID="' + id(a).value + 'Volume">\n';
                                }
                            }
                        }
                    }

                    let u = false;
                    var c5 = d.querySelectorAll('#checkboxes-5 input[type=checkbox]');
                    for (var i = 0; i < c5.length; i++) {
                        if (c5[i].checked) {
                            result_2 += '            <Language ID="' + c5[i].value + '"/>\n';
                            u = true;
                        }
                    };
                    if (!u) {
                        result_2 += '            <Language ID="MatchOS"/>\n';
                    };
                    result_2 += '        </Product>\n';
                }
            }
            n("19Word", "key19Word")
            n("19Excel", "key19Excel")
            n("19Access", "key19Access")
            n("19Outlook", "key19Outlook")
            n("19OneNote", "key19OneNote")
            n("19PowerPoint", "key19PowerPoint")
            n("19Publisher", "key19Publisher")
            n("19ProjectPro", "key19ProjectPro")
            n("19VisioPro", "key19VisioPro")
            n("19ProjectStd", "_key19ProjectStd")
            n("19VisioStd", "_key19VisioStd")
            result_2 += df;
            result_2 += '</Configuration>';
            id("config-2").value = result_2;
            result_2 = '';
        }
    });

    function checkbox(a, b) {
        id(a).addEventListener("change", function() {
            if (this.checked) {
                id(b).setAttribute("disabled", "disabled");
            } else {
                id(b).removeAttribute("disabled");
            }
        })
    }
    checkbox("19ProjectPro", "19ProjectStd")
    checkbox("19VisioPro", "19VisioStd")
    checkbox("19ProjectStd", "19ProjectPro")
    checkbox("19VisioStd", "19VisioPro")
    checkbox("project", "projectstd")
    checkbox("projectstd", "project")
    checkbox("visio", "visiostd")
    checkbox("visiostd", "visio")

    function disabled(selector, flag) {
        let x = d.querySelectorAll(selector);
        for (var j = 0; j < x.length; j++) {
            if (x[j].checked) {
                x[j].checked = false;
            }
            if (flag) {
                x[j].setAttribute("disabled", "disabled")
            };
        };

    }

    function removeDisabled(selector) {
        let x = d.querySelectorAll(selector);
        for (var j = 0; j < x.length; j++) {
            x[j].removeAttribute("disabled");
        };
    }
    var ip = d.querySelectorAll("input[type=radio][name=edition]");
    for (var i = 0; i < ip.length; i++) {
        ip[i].addEventListener("change", function() {
            switch (this.value) {
                case "O365HomePremRetail":
                    {
                        disabled("#checkGroove,#checkLync,#checkOneDrive,#checkOneNote", true);
                        removeDisabled("#checkAccess,#checkOutlook,#checkPublisher");
                    }
                    break;
                case "O365BusinessRetail":
                    {
                        disabled("#checkGroove,#checkLync,#checkOneDrive,#checkPublisher", true);
                        removeDisabled("#checkAccess,#checkOutlook,#checkOneNote");
                    }
                    break;
                case "Professional2019Retail":
                    {
                        disabled("#checkGroove,#checkLync", true);
                        removeDisabled("#checkAccess,#checkOneDrive,#checkOutlook,#checkPublisher,#checkOneNote");
                    }
                    break;
                case "Personal2019Retail":
                    {
                        disabled("#checkGroove,#checkLync,#checkOneDrive", true);
                        removeDisabled("#checkAccess,#checkOutlook,#checkPublisher,#checkOneNote");
                    }
                    break;
                case "Standard2019Retail":
                case "Standard2019Volume":
                    {
                        disabled("#checkAccess,#checkGroove,#checkLync", true);
                        removeDisabled("#checkOneDrive,#checkOutlook,#checkPublisher,#checkOneNote");
                    }
                    break;
                case "HomeBusiness2019Retail":
                    {
                        disabled("#checkAccess,#checkGroove,#checkLync,#checkOneDrive,#checkPublisher", true);
                        removeDisabled("#checkOutlook,#checkOneNote");
                    }
                    break;
                case "HomeStudent2019Retail":
                    {
                        disabled("#checkAccess,#checkGroove,#checkLync,#checkOneDrive,#checkOutlook,#checkPublisher", true);
                        removeDisabled("#checkOneNote");
                    }
                    break;
                default:
                    {
                        let x = d.querySelectorAll("#checkAccess,#checkGroove,#checkLync");
                        for (var j = 0; j < x.length; j++) {
                            x[j].removeAttribute("disabled");
                        };

                    }
                    break;
            }

        });
    };
    id("reset").addEventListener("click", function() {
        id("config").value = "";
        var x = d.querySelectorAll("#key-group input[type=text]");
        for (var i = 0; i < x.length; i++) {
            x[i].value = "";
        };
        id("rad1").checked = true;
        id("rad2").checked = true;
        id("rad3").checked = true;
        id("checkboxes-1").style.display = "none";
        id("checkboxes-2").style.display = "none";
        id("checkboxes-3").style.display = "none";
        id("checkboxes-6").style.display = "none";
        id("checkboxes-7").style.display = "none";

        var p = d.querySelectorAll("#checkboxes-1 input[type=checkbox],#checkboxes-2 input[type=checkbox],#checkboxes-3 input[type=checkbox],#project,#visio,#projectstd,#visiostd,.checkAllApps");
        for (var j = 0; j < p.length; j++) {
            p[j].removeAttribute("disabled");
            p[j].checked = false;
        };
    });
    id("reset-2").addEventListener("click", function() {
        id("config-2").value = "";
        id("rad21").checked = true;
        id("rad31").checked = true;
        var x = d.querySelectorAll("#checkboxes-4 input[type=checkbox],#checkboxes-5 input[type=checkbox]");
        for (var i = 0; i < x.length; i++) {
            x[i].removeAttribute("disabled");
            x[i].checked = false;
        };
        id("checkboxes-5").style.display = "none";

        var y = d.querySelectorAll("#key-group-2 input[type=text]");
        for (var j = 0; j < y.length; j++) {
            y[j].value = "";
        };
    });
    id("checkAllApps").addEventListener("click", function() {
        var x = cl("checkAllApps");
        for (var i = 0; i < x.length; i++) {
            if (x[i].getAttribute("disabled") != "disabled") {
                x[i].checked = true;
            }
        };
    });

    function check(a, b) {
        let x = cl(a);
        for (var i = 0; i < x.length; i++) {
            x[i].checked = b;
        };
    }
    id("uncheckAllApps").addEventListener("click", function() {
        check("checkAllApps", false)
    })

    function b(id) {
        d.getElementById(id).value.length > 0 ? (d.getElementById(id).select(), d.execCommand("copy")) : alert("Nothing to copy !")
    }
    id("copy-config").addEventListener("click", function() {
        b("config");
    })
    id("copy-config-2").addEventListener("click", function() {
        b("config-2");
    })

    function save(file, data) {
        let textToSaveAsBlob = new Blob([data], {
            type: "text/plain"
        });
        let downloadLink = d.createElement("a");
        downloadLink.download = file;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            downloadLink.href = window.webkitURL.createObjectURL(textToSaveAsBlob);
        } else {
            downloadLink.href = window.URL.createObjectURL(textToSaveAsBlob);
            downloadLink.onclick = function(event) {
                document.body.removeChild(event.target);
            };
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }
        downloadLink.click()
    }
    id("d1").addEventListener("click", function() {
        $.get("bat/download-and-install.txt", function(data) {
            save("Install.bat", data)
        });
    })
    id("d2").addEventListener("click", function() {
        $.get("bat/download.txt", function(data) {
            save("Download.bat", data)
        });
    })
}(document));