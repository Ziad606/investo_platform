import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'profile/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Return an array of parameters to prerender
      return [{ id: '1' }, { id: '2' }, { id: '3' }];
    },
  },
  {
    path: 'ProjectDetails/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Return an array of parameters to prerender
      return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];
    },
  },
  {
    path: 'ProjectDetails/:id/:tab',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const tabs = [
        'overview',
        'business-info',
        'discussion',
        'team-members',
        'updates',
        'documents',
        'offer',
      ];
      const params = [];

      // Generate combinations of IDs and tabs
      for (let id = 1; id <= 5; id++) {
        for (const tab of tabs) {
          params.push({ id: id.toString(), tab });
        }
      }

      return params;
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
