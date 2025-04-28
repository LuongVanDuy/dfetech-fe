"use client";

import { connect } from "react-redux";
import { fetchPageDetailClient } from "@/store/actions/page";
import { useEffect } from "react";
import { HomeModule } from "@/components/modules/home";

const HomePage = (props: any) => {
  const { loading, fetchPageDetail, pageDetail } = props;

  useEffect(() => {
    const slug = "home";
    fetchPageDetail(slug, "en");
  }, [fetchPageDetail]);

  return <HomeModule />;
};

const mapStateToProps = (state: any) => ({
  pageDetail: state.page.detail,
});

const mapDispatchToProps = {
  fetchPageDetail: fetchPageDetailClient,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
