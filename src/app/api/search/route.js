// import { NextResponse } from 'next/server';
// import odooClient from '../../lib/odooClient';

// export async function GET() {
//   try {
//     // Authenticate to Odoo
//     const uid = await odooClient.authenticate();

//     // Fetch invoices
//     const invoices = await odooClient.execute_kw('account.move', 'search_read', [
//       [['move_type', '=', 'out_invoice']],
//       ['id', 'name', 'amount_total'],
//     ]);

//     return NextResponse.json({ success: true, invoices });
//   } catch (error) {
//     console.error('Error fetching invoices:', error);
//     return NextResponse.json(
//     //   { success: false, message: error.message || 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// }


// app/api/search/route.js
import { searchPartners } from '../../lib/oddo';

export async function GET() {
   try {
       const partners = await searchPartners();
       return new Response(JSON.stringify({ success: true, data: partners }), {
           status: 200,
           headers: { 'Content-Type': 'application/json' },
       });
   } catch (error) {
       return new Response(JSON.stringify({ success: false, message: error.message }), {
           status: 500,
           headers: { 'Content-Type': 'application/json' },
       });
   }
}
