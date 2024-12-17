const handleSaveChanges = async () => {
    const response = await fetch('/api/updateProfile', {
      method: 'POST',
      body: JSON.stringify({
        email: newEmail,
        password: newPassword,
        profilePicture: newProfilePicture,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      setUser({
        ...user,
        email: newEmail,
        profilePicture: newProfilePicture || user.profilePicture,
      });
      setEditing(false);
    } else {
      console.error('שגיאה בשמירת השינויים');
    }
  };
  