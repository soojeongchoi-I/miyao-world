import { joinFields, mobilePrefixes, type JoinField } from "@/lib/site-config";

const inputClass =
  "h-[26px] w-[125px] border border-hairline px-[6px] text-[12.5px] outline-none";

function Required() {
  return (
    <span className="ml-[4px] align-middle text-[11px] text-[#f0736b]" aria-hidden>
      ✱
    </span>
  );
}

function FieldControl({ field }: { field: JoinField }) {
  if (field.type === "phone") {
    return (
      <div className="flex items-center gap-[6px]">
        <select
          aria-label={`${field.label} 앞자리`}
          className="h-[26px] w-[60px] border border-hairline px-[4px] text-[12.5px] outline-none"
        >
          {mobilePrefixes.map((prefix) => (
            <option key={prefix}>{prefix}</option>
          ))}
        </select>
        <span>-</span>
        <input
          type="text"
          inputMode="numeric"
          aria-label={`${field.label} 가운데자리`}
          className={`${inputClass} w-[58px]`}
        />
        <span>-</span>
        <input
          type="text"
          inputMode="numeric"
          aria-label={`${field.label} 뒷자리`}
          className={`${inputClass} w-[58px]`}
        />
      </div>
    );
  }

  return (
    <input
      type={field.type ?? "text"}
      aria-label={field.label}
      autoComplete="off"
      className={inputClass}
    />
  );
}

export default function JoinFields() {
  return (
    <div className="border-t border-hairline">
      {joinFields.map((field) => (
        <div key={field.id} className="flex border-b border-hairline">
          <div className="w-[150px] shrink-0 py-[7px] text-[13px] leading-[26px]">
            {field.label}
            {field.required && <Required />}
          </div>

          <div className="min-w-0 flex-1 border-l border-hairline py-[7px] pl-[10px]">
            <FieldControl field={field} />
            {field.help && (
              <p className="mt-[4px] text-[12.5px] text-ink-soft">{field.help}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
