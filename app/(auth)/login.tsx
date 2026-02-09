import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { supabase } from '../../lib/supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
  }

  async function signup() {
    await supabase.auth.signUp({
      email,
      password,
    });
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={login} />
      <Button title="Signup" onPress={signup} />
    </View>
  );
}
