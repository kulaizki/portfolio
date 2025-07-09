import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';

// Environment variable for the Make.com webhook URL
const MAKE_WEBHOOK_URL = env.MAKE_WEBHOOK_URL || '';

export const POST: RequestHandler = async ({ request }) => {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate required fields
    const { email, subject, message } = body;
    
    if (!email || !subject || !message) {
      throw error(400, 'Missing required fields');
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw error(400, 'Invalid email format');
    }
    
    // Validate message length
    if (message.length < 10) {
      throw error(400, 'Message must be at least 10 characters');
    }
    
    // Check if webhook URL is configured
    if (!MAKE_WEBHOOK_URL) {
      console.error('MAKE_WEBHOOK_URL is not configured');
      throw error(500, 'Contact form is not properly configured');
    }
    
    // Prepare the webhook payload
    const webhookPayload = {
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      source: 'portfolio-contact-form'
    };
    
    // Send to Make.com webhook
    const webhookResponse = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookPayload),
    });
    
    // Check if webhook request was successful
    if (!webhookResponse.ok) {
      console.error('Webhook request failed:', await webhookResponse.text());
      throw error(500, 'Failed to send message');
    }
    
    // Return success response
    return json({
      success: true,
      message: 'Message sent successfully',
    });
    
  } catch (err) {
    // Handle errors
    if (err instanceof Error && 'status' in err) {
      // Re-throw SvelteKit errors
      throw err;
    }
    
    console.error('Contact form error:', err);
    throw error(500, 'Internal server error');
  }
};