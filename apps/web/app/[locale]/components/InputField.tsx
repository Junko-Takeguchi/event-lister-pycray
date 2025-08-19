'use client';

type InputFieldProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

export default function InputField({
  label,
  type = 'text',
  value,
  onChange,
  required = false,
}: InputFieldProps) {
  return (
    <div>
      <span className="mb-1 block font-medium text-sm">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
