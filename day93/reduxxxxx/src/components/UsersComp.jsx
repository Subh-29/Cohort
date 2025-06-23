// UserCard.jsx
const UserCard = ({ user, isAdmin = false }) => {
  const defaultPfp = `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${user.name}`;

  return (
    <div
      className="rounded-xl shadow-lg bg-[--bg-dark] text-[--text-light] p-4 flex items-start gap-4"
      style={{ border: '1px solid var(--bg-accent)' }}
    >
      <img
        src={defaultPfp}
        alt={user.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{user.name}</h3>
        <p className="text-sm text-[--text-muted] mb-1">{user.email}</p>
        <p className="text-sm">{user.bio || 'No bio available'}</p>
        {isAdmin && (
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1 text-sm rounded bg-[--colour-accent] hover:bg-[--colour-accent-light]">
              Edit
            </button>
            <button className="px-3 py-1 text-sm rounded bg-red-600 hover:bg-red-700">
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
