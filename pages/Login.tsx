'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthStore } from '@/store/authStore';
import { LoginSchema } from '@/lib/schemas';
import { toast } from 'sonner';
import LoginHeader from '@/components/LoginHeader';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState('');

  const router = useRouter();
  const { login, isLoading, error, isAuthenticated, clearError } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearError();
    }
  }, [error, clearError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Validate with Zod
    const result = LoginSchema.safeParse({ username, password });
    if (!result.success) {
      setValidationError(result.error.issues[0].message);
      return;
    }

    const success = await login(username, password);
    if (success) {
      toast.success('Welcome back!');
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LoginHeader />
      {/* Login Form */}
      <main className="flex-1 px-6 pb-8 mt-20">
        <div className="max-w-sm mx-auto">
          <div className="bg-white rounded-sm p-6 py-11 shadow-xs border border-gray-200/50">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground">
                  User ID
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="User ID"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="h-12 rounded-[7px] bg-white border border-gray-400/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="h-12 rounded-[7px] bg-white border border-gray-400/50 pr-12"
                    required
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {validationError && <p className="text-sm text-[#ef4343]">{validationError}</p>}

              <div className="flex flex-col gap-3 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-200 accent-primary" />
                  <span className="text-gray-500">Remember me</span>
                </label>

                <p className="text-xs text-gray-600">To help keep your account secure, save your username only on devices that aren't used by other people.</p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-[#03549b] text-white rounded-sm font-semibold text-lg transition-opacity hover:opacity-90 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
          </div>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">🔒 Your connection is secure and encrypted</p>
          </div>

          <div className="mt-6">
            <h3 className='text-sm text-center text-gray-500'>All users of our online services are subject to our Privacy Statement and agree to be bound by the Terms of Service.</h3>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="text-xs text-gray-500">© 2025 Citigroup Inc. Member FDIC. All rights reserved.</p>
      </footer>
    </div>
  );
}
