import React from 'react'

function Skeleton({ className = '' }) {
  return (
    <div
      className={`skeleton ${className}`}
      aria-hidden="true"
    />
  )
}

export function ProjectCardSkeleton() {
  return (
    <div className="glass-card overflow-hidden" aria-hidden="true">
      <Skeleton className="aspect-video w-full rounded-none" />
      <div className="p-5 flex flex-col gap-3">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex gap-2 mt-1">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
        </div>
      </div>
    </div>
  )
}

export function BlogCardSkeleton() {
  return (
    <div className="glass-card overflow-hidden" aria-hidden="true">
      <Skeleton className="aspect-[16/9] w-full rounded-none" />
      <div className="p-5 flex flex-col gap-3">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-24 mt-2" />
      </div>
    </div>
  )
}

export function GridSkeleton({ count = 6, Card = ProjectCardSkeleton }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true" aria-label="Cargando...">
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  )
}

export default Skeleton
