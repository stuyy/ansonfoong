/**
 * @jest-environment jsdom
 */

import { render, RenderResult } from "@testing-library/react";
import { ProjectListing } from "../../src/components/Project";
import { mockProject } from "../../__mocks__/mockProject";

describe("ProjectListing", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<ProjectListing project={mockProject} index={0} />);
  });

  it("should match snapshot", () => expect(component).toMatchSnapshot());
});
