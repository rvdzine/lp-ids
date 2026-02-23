import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, city, mode } = await req.json();

    // Send confirmation email using Resend
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #FF6B35, #FF8C42); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Welcome to IDS! 🎉</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">Institute of Digital Studies</p>
        </div>
        <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
          <p style="font-size: 16px; color: #333;">Dear <strong>${name}</strong>,</p>
          <p style="font-size: 14px; color: #555; line-height: 1.6;">
            Thank you for registering your interest in our <strong>AI-Powered Digital Marketing Course</strong>! 
            Your registration has been successfully received.
          </p>
          <div style="background: #f9fafb; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="margin: 0 0 12px; color: #333; font-size: 15px;">Your Registration Details:</h3>
            <p style="margin: 4px 0; font-size: 14px; color: #555;">📧 Email: ${email}</p>
            <p style="margin: 4px 0; font-size: 14px; color: #555;">📱 Phone: ${phone}</p>
            <p style="margin: 4px 0; font-size: 14px; color: #555;">📍 City: ${city}</p>
            <p style="margin: 4px 0; font-size: 14px; color: #555;">🎓 Mode: ${mode === 'online' ? 'Online' : 'Offline (Classroom)'}</p>
          </div>
          <p style="font-size: 14px; color: #555; line-height: 1.6;">
            Our career counselor will reach out to you within <strong>24 hours</strong> to guide you through the next steps.
          </p>
          <p style="font-size: 14px; color: #555; line-height: 1.6;">
            Meanwhile, feel free to reach us on WhatsApp: <a href="https://wa.me/919315471293" style="color: #25D366; font-weight: bold;">+91 93154 71293</a>
          </p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999; text-align: center;">
            © ${new Date().getFullYear()} Institute of Digital Studies (IDS) | India's Leading Digital Marketing Institute
          </p>
        </div>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'IDS <info@idigitalstudies.com>',
        to: [email],
        subject: '✅ Registration Confirmed – Welcome to IDS!',
        html: emailHtml,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend error:', data);
      return new Response(JSON.stringify({ error: 'Failed to send email', details: data }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
