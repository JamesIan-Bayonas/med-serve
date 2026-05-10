import { useForm, Link } from '@inertiajs/react';

export default function Edit({ patient }) {

    const { data, setData, post, processing, errors } = useForm({
        _method: 'put',

        name: patient.name || '',
        age: patient.age || '',
        gender: patient.gender || '',
        height: patient.height || '',
        weight: patient.weight || '',
        reason_for_checkup: patient.reason_for_checkup || '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(`/patients/${patient.id}`);
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#f5f7fb',
                padding: '12px 20px',
                fontFamily: 'Arial, sans-serif',
                overflow: 'hidden',
            }}
        >

            {/* Main Container */}
            <div
                style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                }}
            >

                {/* Header */}
                <div style={{ marginBottom: '12px' }}>
                    <h1
                        style={{
                            fontSize: '32px',
                            fontWeight: '700',
                            color: '#0f172a',
                            marginBottom: '4px',
                        }}
                    >
                        Edit Patient Profile
                    </h1>

                    <p
                        style={{
                            color: '#64748b',
                            fontSize: '14px',
                        }}
                    >
                        Update medical records and personal details.
                    </p>
                </div>

                {/* Card */}
                <div
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '14px',
                        border: '1px solid #e5e7eb',
                        overflow: 'hidden',
                    }}
                >

                    <form onSubmit={submit}>

                        {/* Form Body */}
                        <div style={{ padding: '18px' }}>

                            {/* Full Name */}
                            <div style={{ marginBottom: '16px' }}>
                                <label style={labelStyle}>
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    style={inputStyle}
                                />

                                {errors.name && (
                                    <div style={errorStyle}>
                                        {errors.name}
                                    </div>
                                )}
                            </div>

                            {/* Age + Gender */}
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '16px',
                                    marginBottom: '16px',
                                }}
                            >

                                <div>
                                    <label style={labelStyle}>
                                        Age
                                    </label>

                                    <input
                                        type="number"
                                        value={data.age}
                                        onChange={(e) =>
                                            setData('age', e.target.value)
                                        }
                                        style={inputStyle}
                                    />

                                    {errors.age && (
                                        <div style={errorStyle}>
                                            {errors.age}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label style={labelStyle}>
                                        Gender
                                    </label>

                                    <select
                                        value={data.gender}
                                        onChange={(e) =>
                                            setData('gender', e.target.value)
                                        }
                                        style={inputStyle}
                                    >
                                        <option value="">
                                            Select Gender
                                        </option>

                                        <option value="Male">
                                            Male
                                        </option>

                                        <option value="Female">
                                            Female
                                        </option>
                                    </select>

                                    {errors.gender && (
                                        <div style={errorStyle}>
                                            {errors.gender}
                                        </div>
                                    )}
                                </div>

                            </div>

                            {/* Height + Weight */}
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '16px',
                                    marginBottom: '16px',
                                }}
                            >

                                <div>
                                    <label style={labelStyle}>
                                        Height
                                    </label>

                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="number"
                                            value={data.height}
                                            onChange={(e) =>
                                                setData('height', e.target.value)
                                            }
                                            style={inputStyle}
                                        />

                                        <span style={unitStyle}>
                                            cm
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label style={labelStyle}>
                                        Weight
                                    </label>

                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="number"
                                            value={data.weight}
                                            onChange={(e) =>
                                                setData('weight', e.target.value)
                                            }
                                            style={inputStyle}
                                        />

                                        <span style={unitStyle}>
                                            kg
                                        </span>
                                    </div>
                                </div>

                            </div>

                            {/* Reason */}
                            <div>
                                <label style={labelStyle}>
                                    Reason for Checkup
                                </label>

                                <textarea
                                    value={data.reason_for_checkup}
                                    onChange={(e) =>
                                        setData(
                                            'reason_for_checkup',
                                            e.target.value
                                        )
                                    }
                                    style={{
                                        ...inputStyle,
                                        height: '80px',
                                        resize: 'none',
                                    }}
                                />
                            </div>

                        </div>

                        {/* Footer Buttons */}
                        <div
                            style={{
                                borderTop: '1px solid #e5e7eb',
                                padding: '14px 18px',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                gap: '12px',
                                backgroundColor: '#fafafa',
                            }}
                        >

                            <Link
                                href={`/patients/${patient.id}`}
                                style={{
                                    textDecoration: 'none',
                                }}
                            >
                                <button
                                    type="button"
                                    style={cancelButtonStyle}
                                >
                                    Cancel
                                </button>
                            </Link>

                            <button
                                type="submit"
                                disabled={processing}
                                style={saveButtonStyle}
                            >
                                Save Changes
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

/* Styles */

const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontWeight: '600',
    fontSize: '14px',
    color: '#0f172a',
};

const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #d1d5db',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
};

const unitStyle = {
    position: 'absolute',
    right: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#6b7280',
    fontSize: '13px',
};

const saveButtonStyle = {
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    padding: '12px 22px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    height: '44px',
};

const cancelButtonStyle = {
    backgroundColor: 'white',
    color: '#374151',
    border: '1px solid #d1d5db',
    padding: '12px 22px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    height: '44px',
};

const errorStyle = {
    color: 'red',
    marginTop: '5px',
    fontSize: '13px',
};