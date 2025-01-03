import { Calendar, Flag } from 'lucide-react'

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Task {
  id: number
  title: string
  description: string
  status: string
  priority: string
  dueDate: string
  assignee: string
  tags: string[]
}

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  const priorityColors = {
    high: "text-red-500",
    medium: "text-yellow-500",
    low: "text-green-500",
  }

  const statusColors = {
    todo: "bg-slate-500",
    "in-progress": "bg-blue-500",
    completed: "bg-green-500",
  }

  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_auto] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{task.title}</CardTitle>
          <CardDescription>{task.description}</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Flag
            className={`h-4 w-4 ${
              priorityColors[task.priority as keyof typeof priorityColors]
            }`}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Due {new Date(task.dueDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className={`${
                statusColors[task.status as keyof typeof statusColors]
              } text-white`}
            >
              {task.status}
            </Badge>
            {task.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative h-8 w-8">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt={task.assignee}
                className="rounded-full"
              />
            </div>
            <span className="text-sm text-muted-foreground">{task.assignee}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

