import { Link, usePage } from '@inertiajs/react';

export default function Show({ patient }) {

    const flash = usePage().props.flash || {};

    return (
        <div
            style={{
                backgroundColor: '#f4f6f9',
                minHeight: '100vh',
               padding: '20px',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            {/* Success Message */}
            {flash?.success && (
                <div
                    style={{
                        backgroundColor: '#dcfce7',
                        color: '#166534',
                        padding: '14px',
                        borderRadius: '10px',
                        marginBottom: '15px',
                        border: '1px solid #bbf7d0',
                        fontWeight: '600',
                        maxWidth: '900px',
                        marginInline: 'auto',
                    }}
                >
                    {flash.success}
                </div>
            )}

            <div
                style={{
                    width: '100%',
maxWidth: '1400px',
margin: '0 auto',
padding: '0 20px',
boxSizing: 'border-box',
                }}
            >
{/* Logo/Header */}
<div
    style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        marginBottom: '30px',
    }}
>
    {/* Logo Box */}
    <div
        style={{
            width: '56px',
            height: '56px',
            backgroundColor: '#2563eb',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '32px',
            fontWeight: '700',
        }}
    >
        +
    </div>

    {/* Text */}
    <div>
        <h2
            style={{
                margin: 0,
                fontSize: '32px',
                fontWeight: '700',
                color: '#111827',
            }}
        >
            MedServe
        </h2>

        <p
            style={{
                margin: 0,
                color: '#2563eb',
                fontWeight: '700',
                letterSpacing: '2px',
                fontSize: '14px',
            }}
        >
            BARANGAY NANGCA
        </p>
    </div>
</div>


                {/* Header */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '10px',
                    }}
                >
                    <div>
                        <h1
                            style={{
                                fontSize: '28px',
                                fontWeight: '700',
                                color: '#0f172a',
                                marginBottom: '10px',
                            }}
                        >
                            Patient Profile
                        </h1>
                    </div>

                    <Link
                        href="/patients"
                        style={{
                            color: '#2563eb',
                            textDecoration: 'none',
                            fontWeight: '500',
                        }}
                    >
                        ← Back to Patients List
                    </Link>
                </div>

                {/* Card */}
                <div
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: '16px',
                        border: '1px solid #dbe1ea',
                        overflow: 'hidden',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    }}
                >
                    {/* Card Header */}
                    <div
                        style={{
                           padding: '18px 24px',
                            borderBottom: '1px solid #e5e7eb',
                        }}
                    >
                        <h2
                            style={{
                                fontSize: '26px',
                                fontWeight: '700',
                                marginBottom: '6px',
                                color: '#111827',
                            }}
                        >
                            Medical Record Details
                        </h2>

                        <p
                            style={{
                                color: '#64748b',
                                fontSize: '15px',
                            }}
                        >
                            Personal information, physical metrics, and checkup history.
                        </p>
                    </div>

                    {/* Details */}
                    <div>

                        {/* Full Name */}
                        <div style={rowStyle}>
                            <div style={labelStyle}>Full Name</div>
                            <div style={valueStyle}>{patient.name}</div>
                        </div>

                        {/* Demographics */}
                        <div style={rowStyle}>
                            <div style={labelStyle}>Demographics</div>
                            <div style={valueStyle}>
                                {patient.age} years old • {patient.gender}
                            </div>
                        </div>

                        {/* Physical Metrics */}
                        <div style={rowStyle}>
                            <div style={labelStyle}>Physical Metrics</div>
                            <div style={valueStyle}>
                                Height: <strong>{patient.height}</strong> cm
                                &nbsp;&nbsp;&nbsp;
                                Weight: <strong>{patient.weight}</strong> kg
                            </div>
                        </div>

                        {/* Reason */}
                        <div style={rowStyle}>
                            <div style={labelStyle}>Reason for Checkup</div>

                            <div
                                style={{
                                    backgroundColor: '#eff6ff',
                                    padding: '14px',
                                    borderRadius: '10px',
                                    border: '1px solid #bfdbfe',
                                    width: '100%',
                                    color: '#1e3a8a',
                                }}
                            >
                                {patient.reason_for_checkup}
                            </div>
                        </div>

                    </div>

                    {/* Footer */}
                    <div
                        style={{
                            padding: '16px 24px',
                            borderTop: '1px solid #e5e7eb',
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Link href={`/patients/${patient.id}/edit`}>
                            <button
                                style={{
                                    backgroundColor: '#2563eb',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '14px 24px',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                }}
                            >
                                ✏ Edit Patient Record
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* Reusable Styles */
const rowStyle = {
    display: 'grid',
    gridTemplateColumns: '250px 1fr',
    padding: '16px 24px',
    borderBottom: '1px solid #e5e7eb',
    alignItems: 'center',
};

const labelStyle = {
    color: '#64748b',
    fontWeight: '500',
};

const valueStyle = {
    color: '#111827',
    fontWeight: '600',
};