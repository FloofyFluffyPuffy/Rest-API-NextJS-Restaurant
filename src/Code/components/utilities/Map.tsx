// components/InteractiveMap.tsx
"use client"

import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps'

export default function InteractiveMap() {
  // Center coordinates (e.g., Paris)
  const position = { lat: 48.8566, lng: 2.3522 }
  
  // Get your map ID from the Google Cloud Console to enable Advanced Markers
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID 

  return (
    <div className="h-[500px] w-full">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <Map
          defaultCenter={position}
          defaultZoom={13}
          mapId={mapId}
          gestureHandling={'greedy'}
          disableDefaultUI={false}
        >
          {/* Custom Marker Pin */}
          <AdvancedMarker position={position}>
            <Pin background={'#ea4335'} borderColor={'#b31412'} glyphColor={'#fff'} />
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  )
}