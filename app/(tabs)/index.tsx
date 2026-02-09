import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { supabase } from '../../lib/supabase';

export default function Dashboard() {
  const [expenses, setExpenses] = useState<any[]>([]);

  async function loadExpenses() {
    const { data } = await supabase.from('expenses').select('*');
    setExpenses(data || []);
  }

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      {expenses.map(e => (
        <Text key={e.id}>₹{e.amount} - {e.category}</Text>
      ))}
    </View>
  );
}
