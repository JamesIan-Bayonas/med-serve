import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <div className="flex min-h-screen bg-white font-sans">
            <Head title="Create Account - MedServe" />

            <div className="relative hidden w-1/2 lg:block">
                <img 
                    className="absolute inset-0 h-full w-full object-cover" 
                    src="/images/register.jpg" 
                    alt="Barangay Nangca Community" 
                />
                <div className="absolute inset-0 bg-blue-950/40"></div>
                
                <div className="absolute inset-0 flex flex-col justify-center px-12 xl:px-24">
                    <div className="max-w-xl">
                        <span className="mb-6 inline-block rounded-full bg-blue-600/90 px-5 py-2 text-xs font-bold tracking-widest text-white shadow-md uppercase">
                            Join the Community
                        </span>
                        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-6 leading-[1.15] drop-shadow-lg">
                            Empowering Nangca's <br/><span className="text-blue-300">Health Workers.</span>
                        </h2>
                        <p className="text-lg text-white leading-relaxed font-medium drop-shadow-md">
                            Register your staff account today. Join our mission to provide faster medical assistance, accurate dispensing of medicines, and better health monitoring for our community.
                        </p>
                    </div>
                </div>
            </div>

            
            <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16 xl:px-24 relative z-10">
                <div className="mx-auto w-full max-w-md">
                    {/* Header Section */}
                    <div className="mb-8">
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
                        <h2 className="text-2xl font-bold text-slate-800">Create an account</h2>
                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                            Register as an authorized healthcare worker or staff member to access the system.
                        </p>
                    </div>

                    {/* Form Section */}
                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <InputLabel htmlFor="name" value="Full Name" className="text-slate-700 font-semibold mb-1.5" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="e.g. Jay an Bendijo"
                                required
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Email Address" className="text-slate-700 font-semibold mb-1.5" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <InputLabel htmlFor="password" value="Password" className="text-slate-700 font-semibold mb-1.5" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="••••••••"
                                    required
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-slate-700 font-semibold mb-1.5" />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeholder="••••••••"
                                    required
                                />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>
                        </div>

                        <div className="pt-4">
                            <PrimaryButton 
                                className="flex w-full justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.01] hover:shadow-blue-600/40 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" 
                                disabled={processing}
                            >
                                {processing ? 'Creating Account...' : 'Register Account'}
                            </PrimaryButton>
                        </div>
                        
                        <p className="text-center text-sm text-slate-600 mt-6">
                            Already have an account?{' '}
                            <Link href={route('login')} className="font-bold text-blue-600 hover:text-blue-800 transition-colors">
                                Sign in instead
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}