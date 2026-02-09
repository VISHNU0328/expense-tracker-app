import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { supabase } from '../../lib/supabase';

export default function Analytics() {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { data } = await supabase.from('expenses').select('*');
    setData(data?.map(e => e.amount) || []);
  }

  return (
    <View>
      <BarChart
        data={{
          labels: data.map((_, i) => `${i+1}`),
          datasets: [{ data }]
        }}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: () => "#000"
        }}
      />
    </View>
  );
}
