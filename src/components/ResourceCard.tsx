import { ImageBackground, Pressable, Text, View } from 'react-native';

export type ResourceItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

type Props = {
  resource: ResourceItem;
  onPressFind?: (resource: ResourceItem) => void;
};

export default function ResourceCard({ resource, onPressFind }: Props) {
  return (
    <ImageBackground
      source={{ uri: resource.image }}
      resizeMode="cover"
      className="h-52 rounded-2xl overflow-hidden justify-end"
    >
      {/* dark overlay so the text stays readable on any picture */}
      <View className="absolute inset-0 bg-black/40" />

      <View className="p-4 gap-1">
        <Text className="text-white text-xl font-bold" numberOfLines={2}>
          {resource.title}
        </Text>
        <Text className="text-white/90 text-sm" numberOfLines={2}>
          {resource.subtitle}
        </Text>

        <Pressable
          onPress={() => onPressFind?.(resource)}
          className="mt-3 self-start bg-[#F8D7DA] rounded-full px-5 py-2 active:opacity-70"
        >
          <Text className="text-[#6B4226] font-semibold">Find resource</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
