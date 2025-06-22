import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailTrapClient, sender } from "./mailtrapConfig.js"

export const sendVerificationEmail = async (email, verificationToken) => {

    const recipient = [{ email }]

    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })

        console.log("Email sent successfully", response);


    } catch (error) {
        console.error("Error sending verification email:", error);

        throw new Error("Error sending verification email:", error);


    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }]

    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "4f1b77cb-d62d-41b8-a8b7-94f35c72433c",
            template_variables: {
                company_info_name: "AtobraTech",
                name: name
            }
        })

        console.log('Welcome Email sent successfully:', response);

    } catch (error) {
        throw new Error("Welcome Email not sent:", error);

    }
}

export const sendPasswordResetEmail = async (email, resetURL) => {

    const recipient = [{ email }]
    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Reset Password"
        })
    } catch (error) {
       console.log(" Password cannot be reset due to ", error);
        res.status(400).json({ success: false, message: error.message })

    }
}

export const sendResetSuccessfulEmail = async (email)=>{
    const recipient = [{email}]

    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset Email Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset Successful"

        })
    } catch (error) {
         console.log(" Error sending password reset message ", error);
        res.status(400).json({ success: false, message: error.message })
    }
}