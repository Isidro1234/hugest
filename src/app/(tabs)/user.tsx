import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type RowProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
  danger?: boolean;
};

function Row({ icon, label, onPress, danger }: RowProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center gap-4 bg-white rounded-2xl px-4 py-4 border border-gray-100 active:opacity-70"
    >
      <Ionicons name={icon} size={22} color={danger ? '#DC2626' : '#6B4226'} />
      <Text className={`flex-1 text-base font-medium ${danger ? 'text-red-600' : 'text-gray-800'}`}>
        {label}
      </Text>
      {!danger && <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />}
    </Pressable>
  );
}

export default function ProfileScreen() {
  const router = useRouter();

  // Replace with the user from your auth context
  const user = {
    name: 'Isi',
    email: 'isi@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  };

  const handleLogout = () => {
    // TODO: clear JWT from SecureStore + reset auth state, then:
    // router.replace('/(auth)/login');
  };

  return (
    <View className="h-full bg-white pt-20" >
      <View className="items-center pt-8 pb-6 gap-3 bg-white">
        <Image source={{ uri: user.avatar }} className="w-28 h-28 rounded-full bg-gray-200" />
        <View className="items-center">
          <Text className="text-2xl font-bold text-[#6B4226]">{user.name}</Text>
          <Text className="text-sm text-gray-500">{user.email}</Text>
        </View>
      </View>

      <View className="px-4 gap-3">
        <Row icon="settings-outline" label="Settings" onPress={() => router.push('/')} />
        <Row
          icon="information-circle-outline"
          label="Learn more about us"
          onPress={() => router.push('/')}
        />
        <Row icon="log-out-outline" label="Log out" onPress={handleLogout} danger />
      </View>
    </View>
  );
}
