import React, { useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;
        script.async = true;
        document.head.appendChild(script);
    
        script.onload = () => {
          window.kakao.maps.load(() => {
            const container = document.getElementById('map');
            const options = {
              center: new window.kakao.maps.LatLng(33.450701, 126.570667),
              level: 3
            };
            const map = new window.kakao.maps.Map(container, options);
    
            const markerPosition  = new window.kakao.maps.LatLng(33.450701, 126.570667);
            const marker = new window.kakao.maps.Marker({
              position: markerPosition
            });
    
            marker.setMap(map);
          });
        };
      }, []);
    
      return (
        <div id="map" style={{ width: '100%', height: '100%' }}></div>
      );
}

export default KakaoMap;