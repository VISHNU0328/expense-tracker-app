import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { supabase } from '../../lib/supabase';

export default function AddExpense() {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  async function addExpense() {
    await supabase.from('expenses').insert({
      amount: parseFloat(amount),
      category,
    });
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Amount" onChangeText={setAmount} />
      <TextInput placeholder="Category" onChangeText={setCategory} />
      <Button title="Add Expense" onPress={addExpense} />
    </View>
  );
}
