function Hello({ className }) {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div
      className={`${className}  hello-card card bg-primary-100 bg-hello-card bg-cover`}
    >
      <input
        type="date"
        className="bg-primary-400 py-1 px-2 rounded-md mb-8"
        value={today}
      />
      <h2 className="text-4xl font-medium">أهلا رشاد</h2>
      <p className="text-sm mb-3">نتمني لك يوم سعيد!</p>
    </div>
  );
}

export default Hello;
