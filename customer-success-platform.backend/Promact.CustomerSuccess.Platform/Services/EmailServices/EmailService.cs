
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using Promact.CustomerSuccess.Platform.Entities;

namespace Promact.CustomerSuccess.Platform.Services.EmailServices
{
    public class EmailService:IEmailService
    {
        private readonly EmailSender _emailSettings;
        public EmailService(IOptions<EmailSender> options)
        {
            _emailSettings = options.Value;
        }


        /*Function to send the email*/
        public async Task SendEmailAsync(EmailDto request)
        {
            var email = new MimeMessage();
            //email.Sender = MailboxAddress.Parse(_emailSettings.Email);
            email.Sender = MailboxAddress.Parse("ranjayk693social@gmail.com");
            email.To.Add(MailboxAddress.Parse(request.To));
            //email.To.Add(MailboxAddress.Parse("ranjayk693@gmail.com"));
            email.Subject = request.Subject;
            var builder = new BodyBuilder();
            builder.HtmlBody = request.Body;
            email.Body = builder.ToMessageBody();

            using var smtp = new SmtpClient();
            //smtp.Connect(_emailSettings.Host, 587, SecureSocketOptions.StartTls);
            smtp.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
            //smtp.Authenticate(_emailSettings.Email, _emailSettings.Password);
            smtp.Authenticate("ranjayk693social@gmail.com", "pokd uice dvjf ffmm");
            await smtp.SendAsync(email);
            smtp.Disconnect(true);
        }
    }
}
