import { useState, useEffect, createContext, type PropsWithChildren } from "react"
import { Thread } from "../types/threads"
import { generateThreads } from "../utils/generateDummyData"

export const ThreadsContext = createContext<Thread[]>([])

export const ThreadProvider = ({ children }: PropsWithChildren) => {
  const [threads, setThreads] = useState<Thread[]>([])

  useEffect(() => {
    setThreads(generateThreads())
  }, [])

  return <ThreadsContext.Provider value={threads}>{children}</ThreadsContext.Provider>
}
