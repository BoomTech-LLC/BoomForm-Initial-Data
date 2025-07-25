export const settingsInitials = {
    native: { currency: "USD", priceFormat: "100$" },
    general: {
        allowMultipleSubmissions: true,
        showFormTitle: true,
        setPassword: { isActive: false, password: "" },
        showCaptcha: "INVISIBLE",
        timeZone: "UTC4",
        language: "english",
    },
    limits: {
        formAvailability: {
            isActive: true,
            disableBy: {
                date: { isActive: true, startDate: "", endDate: "", warning: "Submission time has been expired." },
                submission: {
                    isActive: true,
                    submissionsNumber: 0,
                    limitPeriod: "Month",
                    limitMonths: 12,
                    warning: "Submissions limit has been reached.",
                },
                perIP: {
                    isActive: true,
                    warning: "Submissions limit has been reached.",
                    interval: "Month",
                    submissionLimit: 0,
                },
            },
        },
    },
    notification: {
        pushNotification: { isActive: false, title: "", message: "" },
        emailNotification: {
            isActive: true,
            title: "You have a new entry!",
            to: "example@me.com",
            json: {
                root: {
                    type: "EmailLayout",
                    data: {
                        backdropColor: "#FFFFFF",
                        canvasColor: "#FFFFFF",
                        textColor: "#262626",
                        fontFamily: "MODERN_SANS",
                        childrenIds: [
                            "block-1740651770550",
                            "block-1740651827659",
                            "block-1740651855096",
                            "block-1740651857067",
                            "block-1740651859079",
                            "block-1740651861328",
                            "block-1740651947111",
                        ],
                    },
                },
                "block-1740651770550": {
                    type: "Text",
                    data: {
                        props: { text: "{FORM_NAME}" },
                        style: {
                            fontWeight: "normal",
                            fontSize: 30,
                            padding: { top: 16, bottom: 16, right: 24, left: 24 },
                        },
                    },
                },
                "block-1740651827659": {
                    type: "Text",
                    data: {
                        style: {
                            fontSize: 20,
                            textAlign: "left",
                            padding: { top: 16, bottom: 16, right: 24, left: 24 },
                        },
                        props: { text: "{Email}" },
                    },
                },
                "block-1740651855096": {
                    type: "Text",
                    data: {
                        style: {
                            fontSize: 22,
                            textAlign: "left",
                            padding: { top: 16, bottom: 16, right: 24, left: 24 },
                        },
                        props: { text: "{Address}" },
                    },
                },
                "block-1740651857067": {
                    type: "Text",
                    data: {
                        style: {
                            fontSize: 22,
                            textAlign: "left",
                            padding: { top: 16, bottom: 16, right: 24, left: 24 },
                        },
                        props: { text: "{Phone Number}" },
                    },
                },
                "block-1740651859079": {
                    type: "Text",
                    data: {
                        style: {
                            fontSize: 22,
                            textAlign: "left",
                            padding: { top: 16, bottom: 16, right: 24, left: 24 },
                        },
                        props: { text: "{Name}" },
                    },
                },
                "block-1740651861328": {
                    type: "Text",
                    data: {
                        style: {
                            fontSize: 22,
                            textAlign: "left",
                            padding: { top: 16, bottom: 16, right: 24, left: 24 },
                        },
                        props: { text: "{Date}" },
                    },
                },
                "block-1740651947111": {
                    type: "Text",
                    data: {
                        style: {
                            fontSize: 22,
                            textAlign: "left",
                            padding: { top: 16, bottom: 16, right: 24, left: 24 },
                        },
                        props: { text: "{Signature}" },
                    },
                },
            },
            message:
                '\n              <!DOCTYPE html>\n              <html>\n                <body>\n                  <div\n                    style=\'background-color:#FFFFFF;color:#262626;font-family:"Montserrat", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%\'\n                  >\n                    <table\n                      align="center"\n                      width="100%"\n                      style="margin:0 auto;max-width:600px;background-color:#FFFFFF"\n                      role="presentation"\n                      cellspacing="0"\n                      cellpadding="0"\n                      border="0"\n                    >\n                      <tbody>\n                        <tr style="width:100%">\n                          <td>\n                            <div\n                              style="font-size:30px;font-weight:normal;padding:16px 24px 16px 24px"\n                            >\n                              {FORM_NAME}\n                            </div>\n                            <div\n                              style="font-size:20px;text-align:left;padding:16px 24px 16px 24px"\n                            >\n                              {Email}\n                            </div>\n                            <div\n                              style="font-size:22px;text-align:left;padding:16px 24px 16px 24px"\n                            >\n                              {Address}\n                            </div>\n                            <div\n                              style="font-size:22px;text-align:left;padding:16px 24px 16px 24px"\n                            >\n                              {Phone Number}\n                            </div>\n                            <div\n                              style="font-size:22px;text-align:left;padding:16px 24px 16px 24px"\n                            >\n                              {Name}\n                            </div>\n                            <div\n                              style="font-size:22px;text-align:left;padding:16px 24px 16px 24px"\n                            >\n                              {Date}\n                            </div>\n                            <div\n                              style="font-size:22px;text-align:left;padding:16px 24px 16px 24px"\n                            >\n                              {Signature}\n                            </div>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </body>\n              </html>',
        },
        emailToRespondent: {
            isActive: false,
            subject: "We have received your response for {Form Name}",
            senderName: "Name Surname",
            to: "Email",
            replyToEmail: "example@me.com",
            json: {
                root: {
                    type: "EmailLayout",
                    data: {
                        backdropColor: "#FFFFFF",
                        canvasColor: "#FFFFFF",
                        textColor: "#262626",
                        fontFamily: "MODERN_SANS",
                        childrenIds: ["block-1740726617470"],
                    },
                },
                "block-1740726617470": {
                    type: "Container",
                    data: {
                        style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
                        props: { childrenIds: ["block-1740726619389", "block-1740726640272"] },
                    },
                },
                "block-1740726619389": {
                    type: "Heading",
                    data: {
                        props: { text: "Thank You !" },
                        style: {
                            fontWeight: "normal",
                            fontSize: 30,
                            textAlign: "center",
                            padding: { top: 16, bottom: 16, right: 24, left: 24 },
                        },
                    },
                },
                "block-1740726640272": {
                    type: "Text",
                    data: {
                        style: {
                            fontWeight: "normal",
                            textAlign: "center",
                            padding: { top: 16, bottom: 16, right: 24, left: 24 },
                        },
                        props: { text: "You submitted the form successfully." },
                    },
                },
            },
            message:
                '<!DOCTYPE html>\n                        <html>\n                          <body>\n                            <div\n                              style=\'background-color:#FFFFFF;color:#262626;font-family:"Montserrat", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%\'\n                            >\n                              <table\n                                align="center"\n                                width="100%"\n                                style="margin:0 auto;max-width:600px;background-color:#FFFFFF"\n                                role="presentation"\n                                cellspacing="0"\n                                cellpadding="0"\n                                border="0"\n                              >\n                                <tbody>\n                                  <tr style="width:100%">\n                                    <td>\n                                      <div style="padding:16px 24px 16px 24px">\n                                        <h1\n                                          style="font-weight:normal;text-align:center;margin:0;font-size:32px;padding:16px 24px 16px 24px"\n                                        >\n                                          Thank You !\n                                        </h1>\n                                        <div\n                                          style="font-weight:normal;text-align:center;padding:16px 24px 16px 24px"\n                                        >\n                                          You submitted the form successfully.\n                                        </div>\n                                      </div>\n                                    </td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </body>\n                        </html>',
        },
    },
    saveProgress: {
        saveAndResume: false,
        allowThePerson: {
            isActive: false,
            emailSubject: "Saved Form",
            message:
                '<!DOCTYPE html>\n                        <html>\n                        <body>\n                            <div\n                            style=\'background-color:#F5F5F5;color:#262626;font-family:"Montserrat", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%\'\n                            >\n                            <table\n                                align="center"\n                                width="100%"\n                                style="margin:0 auto;max-width:600px;background-color:#FFFFFF"\n                                role="presentation"\n                                cellspacing="0"\n                                cellpadding="0"\n                                border="0"\n                            >\n                                <tbody>\n                                <tr style="width:100%">\n                                    <td>\n                                    <div style="padding:16px 24px 16px 24px">\n                                        <h2\n                                        style="font-weight:normal;text-align:center;margin:0;font-size:24px;padding:16px 24px 16px 24px"\n                                        >\n                                        You have draft {form_name} form\n                                        </h2>\n                                        <div\n                                        style="font-weight:normal;text-align:center;padding:16px 24px 16px 24px"\n                                        >\n                                        Please click on the {link} to continue your form\n                                        </div>\n                                    </div>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                            </div>\n                        </body>\n                        </html>',
            json: {
                root: {
                    type: "EmailLayout",
                    data: {
                        backdropColor: "#F5F5F5",
                        canvasColor: "#FFFFFF",
                        textColor: "#262626",
                        fontFamily: "MODERN_SANS",
                        childrenIds: ["block-1745926568214"],
                    },
                },
                "block-1745926568214": {
                    type: "Container",
                    data: {
                        style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
                        props: { childrenIds: ["block-1745926569595", "block-1745926571500"] },
                    },
                },
                "block-1745926569595": {
                    type: "Heading",
                    data: {
                        props: { text: "You have draft {form_name} form" },
                        style: {
                            fontWeight: "normal",
                            textAlign: "center",
                            padding: { top: 16, bottom: 16, right: 24, left: 24 },
                        },
                    },
                },
                "block-1745926571500": {
                    type: "Text",
                    data: {
                        style: {
                            fontWeight: "normal",
                            textAlign: "center",
                            padding: { top: 16, bottom: 16, right: 24, left: 24 },
                        },
                        props: { text: "Please click on the {link} to continue your form" },
                    },
                },
            },
        },
        storeSubmission: { isActive: false, loadButtonLabel: "Load", saveButtonLabel: "Reset" },
    },
    confirmation: {
        afterSubmit: {
            isActive: false,
            enterURL: "https://www.example.com",
            openURL: true,
            message:
                '<!DOCTYPE html>\n                        <html>\n                        <body>\n                            <div\n                            style=\'background-color:#F5F5F5;color:#262626;font-family:"Montserrat", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%\'\n                            >\n                            <table\n                                align="center"\n                                width="100%"\n                                style="margin:0 auto;max-width:600px;background-color:#FFFFFF"\n                                role="presentation"\n                                cellspacing="0"\n                                cellpadding="0"\n                                border="0"\n                            >\n                                <tbody>\n                                <tr style="width:100%">\n                                    <td>\n                                    <div style="padding:16px 24px 16px 24px">\n                                        <h2\n                                        style="font-weight:normal;text-align:center;margin:0;font-size:24px;padding:16px 24px 16px 24px"\n                                        >\n                                        Thank You !\n                                        </h2>\n                                        <div\n                                        style="font-weight:normal;text-align:center;padding:16px 24px 16px 24px"\n                                        >\n                                        You submitted the form successfully.\n                                        </div>\n                                    </div>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                            </div>\n                        </body>\n                        </html>',
            json: {
                root: {
                    type: "EmailLayout",
                    data: {
                        backdropColor: "#F5F5F5",
                        canvasColor: "#FFFFFF",
                        textColor: "#262626",
                        fontFamily: "MODERN_SANS",
                        childrenIds: ["block-1745926568214"],
                    },
                },
                "block-1745926568214": {
                    type: "Container",
                    data: {
                        style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
                        props: { childrenIds: ["block-1745926569595", "block-1745926571500"] },
                    },
                },
                "block-1745926569595": {
                    type: "Heading",
                    data: {
                        props: { text: "Thank You !" },
                        style: {
                            fontWeight: "normal",
                            textAlign: "center",
                            padding: { top: 16, bottom: 16, right: 24, left: 24 },
                        },
                    },
                },
                "block-1745926571500": {
                    type: "Text",
                    data: {
                        style: {
                            fontWeight: "normal",
                            textAlign: "center",
                            padding: { top: 16, bottom: 16, right: 24, left: 24 },
                        },
                        props: { text: "You submitted the form successfully." },
                    },
                },
            },
            addMoreAnswer: { isActive: false, buttonLabel: "Fill Again" },
            downloadPDF: { isActive: false, buttonLabel: "Download PDF" },
            editAnswer: { isActive: false, buttonLabel: "Edit Answer" },
        },
    },
};
