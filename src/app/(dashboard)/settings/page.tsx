"use client";

import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";

import { getProfile } from "@/services/auth.service";

type UserProfile = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default function SettingsPage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const profile = await getProfile();

        setUser(profile);
      } catch (error) {
        console.error("Failed to load profile:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProfile();
  }, []);

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Settings</h1>

        <p className="mt-1 text-muted-foreground">
          Manage your account and application preferences.
        </p>
      </div>

      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>

          <CardDescription>Manage your personal information.</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>

              <Input
                id="name"
                type="text"
                value={isLoading ? "" : (user?.name ?? "")}
                placeholder={isLoading ? "Loading..." : "Full Name"}
                readOnly
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                value={isLoading ? "" : (user?.email ?? "")}
                placeholder={isLoading ? "Loading..." : "Email"}
                readOnly
              />
            </div>

            {/* Save */}
            <div className="flex justify-end">
              <Button disabled>Save Changes</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Application Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Application</CardTitle>

          <CardDescription>
            Customize how the application behaves for you.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            {/* Appearance */}
            <div className="flex items-center justify-between gap-6">
              <div>
                <Label className="text-sm font-medium">Appearance</Label>

                <p className="mt-1 text-sm text-muted-foreground">
                  Choose how Student-MS looks on your device.
                </p>
              </div>

              <Select defaultValue="system">
                <SelectTrigger className="w-35">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="system">System</SelectItem>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Notifications */}
            <div className="flex items-center justify-between gap-6">
              <div>
                <Label className="text-sm font-medium">Notifications</Label>

                <p className="mt-1 text-sm text-muted-foreground">
                  Receive notifications about student activity.
                </p>
              </div>

              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>

          <CardDescription>
            Manage your account security and password.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-sm font-medium">Password</p>

              <p className="mt-1 text-sm text-muted-foreground">
                Keep your account secure with a strong password.
              </p>
            </div>

            {/* <ChangePasswordDialog
              trigger={<Button variant="outline">Change Password</Button>}
            /> */}
          </div>
        </CardContent>
      </Card>

      {/* Account */}
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>

          <CardDescription>Manage your Student-MS account.</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-sm font-medium">Sign out</p>

              <p className="mt-1 text-sm text-muted-foreground">
                Sign out of your Student-MS account on this device.
              </p>
            </div>

            <Button variant="destructive">Sign Out</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
