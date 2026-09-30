import { useRef, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import type BottomSheet from '@gorhom/bottom-sheet';
import TagList from '@/components/TagList';;
import AdvancedSearchSheet, { SearchFilters } from '@/components/AdvancedSearchSheet';
import EventCard, { EventItem } from '@/components/EventCard';

const TAGS = ['All', 'Today', 'This week', 'Workshops', 'Support groups', 'Classes'];

// Replace with data from your Express API
const EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Prenatal Yoga Session',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
    location: 'Community Center, Room 2',
    time: '10:00 AM - 11:30 AM',
  },
  {
    id: '2',
    title: 'New Moms Support Circle',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800',
    location: 'City Health Clinic',
    time: '2:00 PM - 3:30 PM',
  },
];

export default function ActivityScreen() {
  const [tag, setTag] = useState('All');
  const [filters, setFilters] = useState<SearchFilters | null>(null);
  const sheetRef = useRef<BottomSheet>(null);

  const query = filters?.scope === 'events' ? filters.query.toLowerCase() : '';
  const data = EVENTS.filter((e) => e.title.toLowerCase().includes(query));

  return (
    <View className="flex-1 bg-white pt-10" >
      <View className="flex-row items-center justify-between px-4 py-3 m-5 ml-2 mr-2 mb-0">
        <Text className="text-2xl font-bold text-[#6B4226]">Activity</Text>
        <Pressable
          onPress={() => sheetRef.current?.expand()}
          className="w-10 h-10 rounded-full items-center justify-center"
        >
          <Ionicons name="search" size={25} color="#6B4226" />
        </Pressable>
      </View>
<View className=' mb-4'>
  <TagList tags={TAGS} selected={tag} onSelect={setTag} />
</View>
      

      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerClassName="p-4 gap-4 "
        renderItem={({ item }) => (
          <EventCard event={item} onPressMore={(e) => console.log('event details', e.id)} />
        )}
        ListEmptyComponent={
          <Text className="text-center text-gray-500 mt-10">No events found</Text>
        }
      />

      <AdvancedSearchSheet ref={sheetRef} onApply={setFilters} />
    </View>
  );
}
