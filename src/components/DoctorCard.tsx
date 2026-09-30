import { Image, Pressable, Text, View } from 'react-native';

export type DoctorItem = {
  id: string;
  name: string;
  specialty: string;
  photo: string;
  type: 'volunteer' | 'paid';
};

type Props = {
  doctor: DoctorItem;
  onPressDetails?: (doctor: DoctorItem) => void;
};

export default function DoctorCard({ doctor, onPressDetails }: Props) {
  const isVolunteer = doctor.type === 'volunteer';

  return (
    <View className="bg-white rounded-2xl p-4 flex-row items-center gap-4 shadow-sm border border-gray-100">
      <Image source={{ uri: doctor.photo }} className="w-20 h-20 rounded-full bg-gray-200" />

      <View className="flex-1 gap-1">
        <Text className="text-lg font-bold text-[#6B4226]" numberOfLines={1}>
          {doctor.name}
        </Text>
        <Text className="text-sm text-gray-600" numberOfLines={1}>
          {doctor.specialty}
        </Text>

        <View
          className={`self-start rounded-full px-3 py-1 ${
            isVolunteer ? 'bg-green-100' : 'bg-amber-100'
          }`}
        >
          <Text
            className={`text-xs font-semibold ${
              isVolunteer ? 'text-green-700' : 'text-amber-700'
            }`}
          >
            {isVolunteer ? 'Volunteer' : 'Paid'}
          </Text>
        </View>

        <Pressable
          onPress={() => onPressDetails?.(doctor)}
          className="mt-2 self-start bg-[#f8bf99] rounded-full px-4 py-2 active:opacity-70"
        >
          <Text className="text-[#6B4226] font-semibold text-sm">View details</Text>
        </Pressable>
      </View>
    </View>
  );
}
