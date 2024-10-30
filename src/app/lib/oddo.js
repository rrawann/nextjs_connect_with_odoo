import Odoo from 'odoo-xmlrpc';

// Create an instance of the Odoo client
const odoo = new Odoo({
    url: "http://odoo17.qimamhd.com:8070",
    db: 'demo',
    username: 'demo',
    password: 'demo',
});

// Function to connect to Odoo
function connectToOdoo() {
    return new Promise((resolve, reject) => {
        odoo.connect((err) => {
            if (err) {
                return reject(err);
            }
            console.log('Connected to Odoo server.');
            resolve(odoo);
        });
    });
}

// Function to search partners
async function searchPartners() {
    try {
        const odooInstance = await connectToOdoo();
        const inParams = [[]]; // Search criteria
        const params = [inParams];

        const value = await new Promise((resolve, reject) => {
            odooInstance.execute_kw('res.partner', 'search', params, (err, value) => {
                if (err) {
                    return reject(err);
                }
                resolve(value);
            });
        });

        console.log('Result: ', value);
        return value;
    } catch (error) {
        console.error('Error connecting to Odoo:', error);
        throw error;
    }
}

// Export the searchPartners function
export { searchPartners };
