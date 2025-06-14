"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  getAllPrefecturesWithSuffix,
  getFlagByCode,
  type Prefecture,
} from "japan-prefectures-react";

const PrefectureItem = ({
  prefecture,
  language,
}: {
  prefecture: Prefecture;
  language: "en" | "jp";
}) => {
  const flagNode = getFlagByCode(prefecture.code, {
    width: 20,
    className: "rounded-sm",
  });
  return (
    <div className="flex items-center gap-x-2">
      {flagNode}
      {language === "jp" ? prefecture.japanese : prefecture.romaji}
    </div>
  );
};

export function PrefectureSelect({ language }: { language: "en" | "jp" }) {
  const prefectures = getAllPrefecturesWithSuffix();
  const [open, setOpen] = React.useState(false);
  const [currentPref, setValue] = React.useState<Prefecture | undefined>(
    prefectures[0],
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {currentPref ? (
            <PrefectureItem prefecture={currentPref} language={language} />
          ) : (
            "Select prefecture..."
          )}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search prefecture..." />
          <CommandList>
            <CommandEmpty>No prefecture found.</CommandEmpty>
            <CommandGroup>
              {prefectures.map((pref) => (
                <CommandItem
                  key={pref.code}
                  value={pref.code}
                  onSelect={(currentValue) => {
                    setValue(
                      prefectures.find((pref) => pref.code === currentValue),
                    );
                    setOpen(false);
                  }}
                >
                  <PrefectureItem prefecture={pref} language={language} />
                  <Check
                    className={cn(
                      "ml-auto",
                      currentPref?.code === pref.code
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
