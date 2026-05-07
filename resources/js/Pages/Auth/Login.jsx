import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="flex min-h-screen bg-white font-sans">
            <Head title="Log in - MedServe" />

            {/* Left Side: Form */}
            <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16 xl:px-24 relative z-10">
                <div className="mx-auto w-full max-w-md">
                    {/* Header Section */}
                    <div className="mb-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-600/30">
                                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">MedServe</h1>
                                <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mt-0.5">Barangay Nangca</p>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800">Welcome back!</h2>
                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                            Please enter your credentials to access the Barangay Nangca health information system.
                        </p>
                    </div>

                    {status && <div className="mb-4 font-medium text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">{status}</div>}

                    {/* Form Section */}
                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="email" value="Email Address" className="text-slate-700 font-semibold mb-1.5" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="Enter your email"
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" className="text-slate-700 font-semibold mb-1.5" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="••••••••"
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-between pt-1">
                            <label className="flex items-center cursor-pointer group">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 transition-colors group-hover:border-blue-500"
                                />
                                <span className="ml-2 text-sm text-slate-600 font-medium select-none group-hover:text-slate-800">Remember me</span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            )}
                        </div>

                        <PrimaryButton 
                            className="flex w-full justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.01] hover:shadow-blue-600/40 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" 
                            disabled={processing}
                        >
                            {processing ? 'Signing in...' : 'Sign In to MedServe'}
                        </PrimaryButton>

                        <div className="relative mt-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-4 text-slate-400 font-medium">New to the system?</span>
                            </div>
                        </div>

                        <p className="text-center text-sm text-slate-600 mt-6">
                            <Link href={route('register')} className="font-bold text-blue-600 hover:text-blue-800 transition-colors">
                                Create a staff account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

           
            <div className="relative hidden w-1/2 lg:block">
                <img 
                    className="absolute inset-0 h-full w-full object-cover" 
                    src="/images/login.jpg" 
                    alt="Barangay Nangca Health Center" 
                /> 
                <div className="absolute inset-0 bg-blue-950/40"></div>
                
                <div className="absolute inset-0 flex flex-col justify-center px-12 xl:px-24">
                    <div className="max-w-xl">
                        <span className="mb-6 inline-block rounded-full bg-blue-600/90 px-5 py-2 text-xs font-bold tracking-widest text-white shadow-md uppercase">
                            MedServe Version 1.0
                        </span>
                        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-6 leading-[1.15] drop-shadow-lg">
                            Streamlining Healthcare for <span className="text-blue-300">Barangay Nangca.</span>
                        </h2>
                        <p className="text-lg text-white leading-relaxed font-medium drop-shadow-md">
                            Empowering local health workers to efficiently manage patient records, track medicine inventory, and monitor community health initiatives in one secure, centralized platform.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}