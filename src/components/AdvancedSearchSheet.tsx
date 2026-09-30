import { forwardRef, useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetTextInput,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

export type SearchScope = 'doctors' | 'events' | 'resources';
export type DoctorTypeFilter = 'all' | 'volunteer' | 'paid';

export type SearchFilters = {
  scope: SearchScope;
  query: string;
  doctorType: DoctorTypeFilter;
};

export const DEFAULT_FILTERS: SearchFilters = {
  scope: 'doctors',
  query: '',
  doctorType: 'all',
};

type Props = {
  onApply: (filters: SearchFilters) => void;
  initial?: SearchFilters;
};

const SCOPES: { key: SearchScope; label: string; placeholder: string }[] = [
  { key: 'doctors', label: 'Doctors', placeholder: 'Search by doctor name' },
  { key: 'events', label: 'Events', placeholder: 'Search events' },
  { key: 'resources', label: 'Resources', placeholder: 'Search resources' },
];

const DOCTOR_TYPES: { key: DoctorTypeFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'volunteer', label: 'Volunteer' },
  { key: 'paid', label: 'Paid' },
];

function Chip({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-full px-4 py-2 ${active ? 'bg-[#6B4226]' : 'bg-gray-200'}`}
    >
      <Text className={`text-sm font-medium ${active ? 'text-white' : 'text-gray-800'}`}>
        {label}
      </Text>
    </Pressable>
  );
}

// Open with:   sheetRef.current?.expand()
// Close with:  sheetRef.current?.close()
const AdvancedSearchSheet = forwardRef<BottomSheet, Props>(
  ({ onApply, initial = DEFAULT_FILTERS }, ref) => {
    const [filters, setFilters] = useState<SearchFilters>(initial);
    const snapPoints = useMemo(() => ['55%', '85%'], []);

    const placeholder = SCOPES.find((s) => s.key === filters.scope)?.placeholder ?? 'Search';

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} opacity={0.4} />
      ),
      []
    );

    const close = () => (ref as React.RefObject<BottomSheet>)?.current?.close();

    const apply = () => {
      onApply(filters);
      close();
    };

    const reset = () => {
      setFilters(DEFAULT_FILTERS);
      onApply(DEFAULT_FILTERS);
    };

    return (
      <BottomSheet
        ref={ref}
        index={-1} // hidden until expand() is called
        snapPoints={snapPoints}
        enablePanDownToClose
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        backdropComponent={renderBackdrop}
        backgroundStyle={{ borderRadius: 28 }}
      >
        <BottomSheetView className="px-5 pb-8 gap-5">
          <Text className="text-xl font-bold text-[#6B4226]">Advanced search</Text>

          {/* 1. What are we searching? */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-gray-600">Search in</Text>
            <View className="flex-row gap-2">
              {SCOPES.map((s) => (
                <Chip
                  key={s.key}
                  label={s.label}
                  active={filters.scope === s.key}
                  onPress={() => setFilters((f) => ({ ...f, scope: s.key }))}
                />
              ))}
            </View>
          </View>

          {/* 2. Text query */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-gray-600">Keyword</Text>
            <BottomSheetTextInput
              value={filters.query}
              onChangeText={(query) => setFilters((f) => ({ ...f, query }))}
              placeholder={placeholder}
              placeholderTextColor="#9CA3AF"
              className="bg-gray-100 rounded-xl px-4 py-3 text-base text-gray-900"
            />
          </View>

          {/* 3. Extra filter only relevant to doctors */}
          {filters.scope === 'doctors' && (
            <View className="gap-2">
              <Text className="text-sm font-semibold text-gray-600">Doctor type</Text>
              <View className="flex-row gap-2">
                {DOCTOR_TYPES.map((t) => (
                  <Chip
                    key={t.key}
                    label={t.label}
                    active={filters.doctorType === t.key}
                    onPress={() => setFilters((f) => ({ ...f, doctorType: t.key }))}
                  />
                ))}
              </View>
            </View>
          )}

          <View className="flex-row gap-3 mt-2">
            <Pressable
              onPress={reset}
              className="flex-1 border border-gray-300 rounded-full py-3 items-center active:opacity-70"
            >
              <Text className="font-semibold text-gray-700">Reset</Text>
            </Pressable>
            <Pressable
              onPress={apply}
              className="flex-1 bg-[#6B4226] rounded-full py-3 items-center active:opacity-70"
            >
              <Text className="font-semibold text-white">Apply</Text>
            </Pressable>
          </View>
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

AdvancedSearchSheet.displayName = 'AdvancedSearchSheet';
export default AdvancedSearchSheet;
