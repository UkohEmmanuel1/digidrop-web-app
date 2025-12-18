'use client';

import { useEffect } from 'react';
import { UserProfile } from '@/types/response-type';
import { useUserStore } from '@/store/useUserProfile';
import DashboardUi from './dashboard-ui';

interface Props {
  profile: UserProfile;
}

const DashboardClient = ({ profile }: Props) => {
    const setProfile = useUserStore((state) => state.setProfile);
     useEffect(() => {
    setProfile(profile);
   }, [profile, setProfile]);
  return (
    <DashboardUi />
  )
}

export default DashboardClient