import { Image, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export type EventItem = {
  id: string;
  title: string;
  image: string;
  location: string;
  time: string; // e.g. "10:00 AM - 12:00 PM"
};

type Props = {
  event: EventItem;
  onPressMore?: (event: EventItem) => void;
};

export default function EventCard({ event, onPressMore }: Props) {
  return (
    <View className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      <Image source={{ uri: event.image }} className="w-full h-40" resizeMode="cover" />

      <View className="p-4 gap-2">
        <Text className="text-lg font-bold text-[#6B4226]" numberOfLines={2}>
          {event.title}
        </Text>

        <View className="flex-row items-center gap-2">
          <Ionicons name="location-outline" size={16} color="#6B7280" />
          <Text className="text-sm text-gray-600 flex-1" numberOfLines={1}>
            {event.location}
          </Text>
        </View>

        <View className="flex-row items-center gap-2">
          <Ionicons name="time-outline" size={16} color="#6B7280" />
          <Text className="text-sm text-gray-600">{event.time}</Text>
        </View>

        <Pressable
          onPress={() => onPressMore?.(event)}
          className="mt-2 bg-[#f8bf99] rounded-full py-3 items-center active:opacity-70"
        >
          <Text className="text-[#6B4226] font-semibold">See more</Text>
        </Pressable>
      </View>
    </View>
  );
}
