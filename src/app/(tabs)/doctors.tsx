import { useRef, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import type BottomSheet from '@gorhom/bottom-sheet';
import TagList from '@/components/TagList';
import AdvancedSearchSheet, { SearchFilters } from '@/components/AdvancedSearchSheet';
import DoctorCard, { DoctorItem } from '@/components/DoctorCard';

const TAGS = ['All', 'Volunteer', 'Paid', 'Obstetrics', 'Pediatrics', 'Mental health'];

// Replace with data from your Express API
const DOCTORS: DoctorItem[] = [
  {
    id: '1',
    name: 'Dr. Amara Okafor',
    specialty: 'Obstetrics & Gynecology',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
    type: 'volunteer',
  },
  {
    id: '2',
    name: 'Dr. Daniel Reyes',
    specialty: 'Pediatrics',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
    type: 'paid',
  },
];

export default function DoctorsScreen() {
  const [tag, setTag] = useState('All');
  const [filters, setFilters] = useState<SearchFilters | null>(null);
  const sheetRef = useRef<BottomSheet>(null);

  const data = DOCTORS.filter((d) => {
    // tag row
    if (tag === 'Volunteer' && d.type !== 'volunteer') return false;
    if (tag === 'Paid' && d.type !== 'paid') return false;
    if (['Obstetrics', 'Pediatrics', 'Mental health'].includes(tag) && !d.specialty.includes(tag))
      return false;
    // advanced search sheet
    if (filters?.scope === 'doctors') {
      if (!d.name.toLowerCase().includes(filters.query.toLowerCase())) return false;
      if (filters.doctorType !== 'all' && d.type !== filters.doctorType) return false;
    }
    return true;
  });

  return (
    <View className="flex-1 bg-white pt-10 ">
      <View className="flex-row items-center justify-between px-4 py-3 m-3 mb-0 ml-0 mr-0">
        <Text className="text-2xl font-bold text-[#6B4226]">Doctors</Text>
        <Pressable
          onPress={() => sheetRef.current?.expand()}
          className="w-10 h-10 rounded-full bg-[#F8D7DA] items-center justify-center"
        >
          <Ionicons name="options-outline" size={20} color="#6B4226" />
        </Pressable>
      </View>
<View className='p-0 pb-0 pt-0 pr-0 mb-2 '>
  <TagList tags={TAGS} selected={tag} onSelect={setTag} />
</View>
      

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerClassName="p-4 gap-4"
        renderItem={({ item }) => (
          <DoctorCard doctor={item} onPressDetails={(d:any) => console.log('doctor details', d.id)} />
        )}
        ListEmptyComponent={
          <Text className="text-center text-gray-500 mt-10">No doctors found</Text>
        }
      />

      <AdvancedSearchSheet ref={sheetRef} onApply={setFilters} />
    </View>
  );
}
