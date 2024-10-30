// app/components/PartnersList.js
"use client";

import { useEffect, useState } from 'react';

const PartnersList = () => {
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const response = await fetch('/api/search');
                if (!response.ok) {
                    throw new Error('Failed to fetch partners');
                }
                const data = await response.json();
                setPartners(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPartners();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>Partners List</h2>
            <ul>
                {partners.map((partnerId) => (
                    <li key={partnerId}>Partner ID: {partnerId}</li>
                ))}
            </ul>
        </div>
    );
};

export default PartnersList;
