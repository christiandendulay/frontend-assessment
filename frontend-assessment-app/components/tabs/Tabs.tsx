import * as Tabs from "@radix-ui/react-tabs";
import React, { useMemo } from "react";

export type Tab = {
  title: string;
  content: React.ReactNode;
};

export type TabComponentProps = {
  tabList: Tab[];
};

type TabsTriggerProps = {
  value: string;
  title: string;
};

type TabsContentProps = Omit<TabsTriggerProps & Tab, "title">;
const TabsTrigger = ({ value, title }: TabsTriggerProps) => {
  return (
    <Tabs.Trigger
      value={value}
      className="px-4 py-2 text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
    >
      {title}
    </Tabs.Trigger>
  );
};

const TabContent = ({ content, value }: TabsContentProps) => {
  return (
    <Tabs.Content
      value={value}
      className="p-4 bg-white border border-gray-300 rounded-b-md transition-opacity duration-500 ease-out animate-fadeIn"
    >
      {content}
    </Tabs.Content>
  );
};
export const TabComponent = ({ tabList }: TabComponentProps) => {
  const { triggers, contents } = useMemo(() => {
    let triggers: React.ReactNode[] = [];
    let contents: React.ReactNode[] = [];
    {
      tabList.forEach(({ title, content }, index) => {
        const tabValue = `tab-${index}`;
        triggers.push(
          <TabsTrigger key={tabValue} value={tabValue} title={title} />
        );
        contents.push(
          <TabContent key={tabValue} value={tabValue} content={content} />
        );
      });
    }
    return {
      triggers,
      contents,
    };
  }, [tabList]);
  return (
    <Tabs.Root className="w-full max-w-md mx-auto" defaultValue="tab-0">
      <Tabs.List className="flex border-b border-gray-300">
        {triggers.map((trigger) => trigger)}
      </Tabs.List>
      {contents.map((content) => content)}
    </Tabs.Root>
  );
};

export default TabComponent;
