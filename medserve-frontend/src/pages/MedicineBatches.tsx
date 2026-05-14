import React, { useEffect, useState } from "react";
import axios from "axios";

import {
    Search,
    Filter,
    ShieldCheck,
    CalendarX2,
    UserCircle2,
    Plus,
    ClipboardList,
} from "lucide-react";

// 1. The Data Contract
interface MedicineBatch {
    id: number;
    medicine_id: number;
    batch_number: string;
    date_received: string; 
    expiration_date: string;
    quantity_received: number;
    quantity_remaining: number;
}

export default function MedicineBatchesPage() {
    // 2. Lock the state to the interface using <MedicineBatch[]>
    const [batches, setBatches] = useState<MedicineBatch[]>([]);
    const [filteredBatches, setFilteredBatches] = useState<MedicineBatch[]>([]);
    const [search, setSearch] = useState("");
    const [filterExpired, setFilterExpired] = useState(false);

    const [form, setForm] = useState({
        medicine_id: "",
        batch_number: "",
        date_received: "",
        expiration_date: "",
        quantity_received: "",
    });

    useEffect(() => {
        fetchBatches();
    }, []);

    const fetchBatches = async () => {
        try {
            // 1. Grab the digital ID card from the browser
            const token = localStorage.getItem('medserve_token');
            
            // 2. Hit the full API URL and attach the headers
            const response = await axios.get("http://127.0.0.1:8000/api/batches", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            });

            setBatches(response.data);
            setFilteredBatches(response.data);
        } catch (error: any) {
    console.error(error);

    if (error.response?.data?.message) {
        alert(error.response.data.message);
    } else {
        alert("Failed to add medicine batch");
    }
}
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (
            !form.medicine_id ||
            !form.batch_number ||
            !form.date_received ||  
            !form.expiration_date ||
            !form.quantity_received
        ) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            const submitData = {
                ...form,
                quantity_remaining: form.quantity_received,
            };

            // 1. Grab the token again for the submission
            const token = localStorage.getItem('medserve_token');

            // 2. Send the data to the API with the security headers attached
            const response = await axios.post(
                "http://127.0.0.1:8000/api/batches",
                submitData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json'
                    }
                }
            );

            const updatedBatches = [
                ...batches,
                response.data,
            ];

            setBatches(updatedBatches);
            setFilteredBatches(updatedBatches);

            setForm({
                medicine_id: "",
                batch_number: "",
                date_received: "",
                expiration_date: "",
                quantity_received: "",
            });

            alert("Medicine batch added successfully!");
        } catch (error: any) {
            console.error(error);
            alert("Failed to add medicine batch");
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setSearch(value);

        const filtered = batches.filter((batch) =>
            batch.batch_number
                .toLowerCase()
                .includes(value.toLowerCase())
        );

        setFilteredBatches(filtered);
    };

    const handleFilterExpired = () => {
        if (!filterExpired) {
            const expired = batches.filter(
                (batch) =>
                    new Date(batch.expiration_date) <
                    new Date()
            );

            setFilteredBatches(expired);
        } else {
            setFilteredBatches(batches);
        }

        setFilterExpired(!filterExpired);
    };

    const totalBatches = batches.length;

    const activeBatches = batches.filter(
        (batch) =>
            new Date(batch.expiration_date) > new Date()
    ).length;

    const expiredBatches = batches.filter(
        (batch) =>
            new Date(batch.expiration_date) <= new Date()
    ).length;

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f3f6fb",
                fontFamily: "Inter, sans-serif",
            }}
        >
            {/* HEADER */}
            <div
                style={{
                    height: "72px",
                    background: "#ffffff",
                    borderBottom: "1px solid #e5e7eb",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 28px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                    }}
                >
                    <div
                        style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "14px",
                            background:
                                "linear-gradient(135deg,#2563eb,#1d4ed8)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Plus color="white" size={24} />
                    </div>

                    <div>
                        <h1
                            style={{
                                margin: 0,
                                fontSize: "18px",
                                fontWeight: "800",
                                color: "#0f172a",
                            }}
                        >
                            MedServe
                        </h1>

                        <p
                            style={{
                                margin: 0,
                                color: "#2563eb",
                                fontWeight: "700",
                                letterSpacing: "2px",
                                fontSize: "10px",
                            }}
                        >
                            BARANGAY NANGCA
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "24px",
                    }}
                >
                    <span
                        style={{
                            color: "#64748b",
                            fontSize: "15px",
                        }}
                    >
                        Medicine Inventory
                    </span>

                    <span
                        style={{
                            color: "#2563eb",
                            fontWeight: "700",
                            fontSize: "15px",
                        }}
                    >
                        Batch Tracking
                    </span>

                    <div
                        style={{
                            width: "1px",
                            height: "28px",
                            background: "#e2e8f0",
                        }}
                    />

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <UserCircle2
                            size={30}
                            color="#2563eb"
                        />

                        <div>
                            <div
                                style={{
                                    fontWeight: "700",
                                    fontSize: "15px",
                                }}
                            >
                                Juan Dela Cruz
                            </div>

                            <div
                                style={{
                                    fontSize: "12px",
                                    color: "#64748b",
                                }}
                            >
                                Staff
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN */}
            <div
                style={{
                    padding: "24px 28px",
                    maxWidth: "1500px",
                    margin: "0 auto",
                }}
            >
                {/* TOP */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "24px",
                    }}
                >
                    <div>
                        <h1
                            style={{
                                fontSize: "45px",
                                lineHeight: "1",
                                margin: 0,
                                fontWeight: "900",
                                color: "#0f172a",
                            }}
                        >
                            Medicine Batch Tracking
                        </h1>

                        <p
                            style={{
                                color: "#64748b",
                                fontSize: "17px",
                                marginTop: "12px",
                            }}
                        >
                            Manage medicine inventory batches and
                            monitor expiration dates.
                        </p>
                    </div>

                    <div
                        style={{
                            background: "#ffffff",
                            borderRadius: "22px",
                            padding: "20px 24px",
                            display: "flex",
                            gap: "22px",
                            border: "1px solid #e5e7eb",
                            minWidth: "500px",
                            justifyContent: "space-between",
                        }}
                    >
                        <StatCard
                            icon={
                                <ClipboardList
                                    size={18}
                                    color="#2563eb"
                                />
                            }
                            bg="#dbeafe"
                            label="Total"
                            value={totalBatches}
                            sub="All records"
                        />

                        <StatCard
                            icon={
                                <ShieldCheck
                                    size={18}
                                    color="#16a34a"
                                />
                            }
                            bg="#dcfce7"
                            label="Active"
                            value={activeBatches}
                            sub="Not expired"
                        />

                        <StatCard
                            icon={
                                <CalendarX2
                                    size={18}
                                    color="#ef4444"
                                />
                            }
                            bg="#fee2e2"
                            label="Expired"
                            value={expiredBatches}
                            sub="Need attention"
                        />
                    </div>
                </div>

                {/* GRID */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "380px 1fr",
                        gap: "24px",
                    }}
                >
                    {/* FORM */}
                    <div
                        style={{
                            background: "#ffffff",
                            borderRadius: "24px",
                            padding: "28px",
                            border: "1px solid #e5e7eb",
                            height: "fit-content",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "22px",
                                marginBottom: "24px",
                                fontWeight: "800",
                                color: "#0f172a",
                            }}
                        >
                            Add New Batch
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <InputField
                                label="Medicine ID"
                                value={form.medicine_id}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        medicine_id:
                                            e.target.value,
                                    })
                                }
                            />

                            <InputField
                                label="Batch Number"
                                value={form.batch_number}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        batch_number:
                                            e.target.value,
                                    })
                                }
                            />

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "1fr 1fr",
                                    gap: "12px",
                                }}
                            >
                                <InputField
                                    label="Date Received"
                                    type="date"
                                    value={form.date_received}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            date_received:
                                                e.target.value,
                                        })
                                    }
                                />

                                <InputField
                                    label="Expiration Date"
                                    type="date"
                                    value={form.expiration_date}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            expiration_date:
                                                e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <InputField
                                label="Qty Received"
                                value={form.quantity_received}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        quantity_received:
                                            e.target.value,
                                    })
                                }
                            />

                            <button
                                type="submit"
                                style={{
                                    width: "100%",
                                    height: "52px",
                                    border: "none",
                                    borderRadius: "14px",
                                    background:
                                        "linear-gradient(135deg,#2563eb,#1d4ed8)",
                                    color: "#ffffff",
                                    fontWeight: "700",
                                    fontSize: "15px",
                                    cursor: "pointer",
                                    marginTop: "14px",
                                }}
                            >
                                Add Medicine Batch
                            </button>
                        </form>
                    </div>

                    {/* TABLE */}
                    <div
                        style={{
                            background: "#ffffff",
                            borderRadius: "24px",
                            padding: "24px",
                            border: "1px solid #e5e7eb",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent:
                                    "space-between",
                                alignItems: "center",
                                marginBottom: "18px",
                            }}
                        >
                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "24px",
                                    fontWeight: "800",
                                    color: "#0f172a",
                                }}
                            >
                                Medicine Batches
                            </h2>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        width: "260px",
                                        height: "48px",
                                        borderRadius: "14px",
                                        border:
                                            "1px solid #dbe2ea",
                                        padding: "0 14px",
                                        background: "#f8fafc",
                                    }}
                                >
                                    <Search
                                        size={18}
                                        color="#64748b"
                                    />

                                    <input
                                        value={search}
                                        onChange={handleSearch}
                                        placeholder="Search batch..."
                                        style={{
                                            border: "none",
                                            outline: "none",
                                            background:
                                                "transparent",
                                            width: "100%",
                                            fontSize: "14px",
                                        }}
                                    />
                                </div>

                                <button
                                    onClick={handleFilterExpired}
                                    style={{
                                        height: "48px",
                                        padding: "0 18px",
                                        borderRadius: "14px",
                                        border:
                                            "1px solid #dbe2ea",
                                        background:
                                            "#ffffff",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        fontWeight: "700",
                                        fontSize: "14px",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Filter size={18} />
                                    Filter
                                </button>
                            </div>
                        </div>

                        <table
                            style={{
                                width: "100%",
                                borderCollapse:
                                    "collapse",
                            }}
                        >
                            <thead>
                                <tr
                                    style={{
                                        background:
                                            "#f8fafc",
                                        height: "52px",
                                    }}
                                >
                                    <Th>BATCH</Th>
                                    <Th>MEDICINE ID</Th>
                                    <Th>DATE RECEIVED</Th>
                                    <Th>EXPIRATION</Th>
                                    <Th>QTY RECEIVED</Th>
                                    <Th>QTY REMAINING</Th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredBatches.map(
                                    (batch) => (
                                        <tr
                                            key={batch.id}
                                            style={{
                                                height:
                                                    "62px",
                                                borderBottom:
                                                    "1px solid #edf2f7",
                                            }}
                                        >
                                            <Td bold>
                                                {
                                                    batch.batch_number
                                                }
                                            </Td>

                                            <Td>
                                                {
                                                    batch.medicine_id
                                                }
                                            </Td>

                                            <Td>
                                                {
                                                    batch.date_received
                                                }
                                            </Td>

                                            <Td>
                                                {
                                                    batch.expiration_date
                                                }
                                            </Td>

                                            <Td>
                                                {
                                                    batch.quantity_received
                                                }
                                            </Td>

                                            <Td>
                                                {
                                                    batch.quantity_remaining
                                                }
                                            </Td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- TYPESCRIPT INTERFACES FOR UI COMPONENTS ---

interface InputFieldProps {
    label: string;
    type?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ label, type = "text", value, onChange }: InputFieldProps) {
    return (
        <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "700", fontSize: "14px", color: "#0f172a" }}>
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                style={{ width: "100%", height: "46px", borderRadius: "14px", border: "1px solid #d7dee7", padding: "0 14px", boxSizing: "border-box", fontSize: "14px", outline: "none" }}
            />
        </div>
    );
}

interface StatCardProps {
    icon: React.ReactNode;
    bg: string;
    label: string;
    value: number | string;
    sub: string;
}

function StatCard({ icon, bg, label, value, sub }: StatCardProps) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "16px", background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {icon}
            </div>
            <div>
                <div style={{ fontSize: "14px", color: "#64748b" }}>{label}</div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a" }}>{value}</div>
                <div style={{ fontSize: "12px", color: "#94a3b8" }}>{sub}</div>
            </div>
        </div>
    );
}

interface ThProps {
    children: React.ReactNode;
}

function Th({ children }: ThProps) {
    return (
        <th style={{ textAlign: "left", padding: "0 20px", fontSize: "13px", color: "#64748b", fontWeight: "700" }}>
            {children}
        </th>
    );
}

interface TdProps {
    children: React.ReactNode;
    bold?: boolean; // The "?" makes this property optional, fixing Error 2741
}

function Td({ children, bold }: TdProps) {
    return (
        <td style={{ padding: "0 20px", fontWeight: bold ? "700" : "500", fontSize: "15px", color: "#0f172a" }}>
            {children}
        </td>
    );
}